import { getProducts } from './api.js';
import { getFavorites, toggleFavorite } from './storage.js';
import { ProductCard } from './components/card.js';
import { Header } from './components/header.js';

const headerContainer = document.getElementById('header-container');
headerContainer.innerHTML = Header();

let allProducts = [];
let currentView = 'home';

const contentContainer = document.getElementById('content');
const loadingElement = document.getElementById('loading');

function setupTheme() {
    const btn = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        btn.textContent = '☀️';
    }

    btn.addEventListener('click', () => {
        document.body.classList.toggle('dark');

        const isDark = document.body.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');

        btn.textContent = isDark ? '☀️' : '🌙';
    });
}

function populateCategories() {
    const select = document.getElementById('category-filter');

    const categories = [...new Set(allProducts.map(p => p.category))];

    categories.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = cat;
        select.appendChild(option);
    });
}

async function init() {
    loadingElement.style.display = 'block';
    allProducts = await getProducts();
    loadingElement.style.display = 'none';
    
    populateCategories();
    render();
    setupEventListeners();
    setupTheme();
}

function render(list = null) {
    contentContainer.innerHTML = '';

    const productsToDisplay = list || (
        currentView === 'home' 
        ? allProducts 
        : getFavorites()
    );

    if (productsToDisplay.length === 0) {
        contentContainer.innerHTML = `<p>Nenhum produto encontrado.</p>`;
        return;
    }

    productsToDisplay.forEach(product => {
        const isFav = getFavorites().some(f => f.id === product.id);
        const cardHTML = ProductCard(product, isFav);
        
        const template = document.createElement('div');
        template.innerHTML = cardHTML;
        const cardElement = template.firstElementChild;

        cardElement.querySelector('.fav-btn').addEventListener('click', () => {
            toggleFavorite(product);
            applyFilters();
        });

        contentContainer.appendChild(cardElement);
    });
}

function applyFilters() {
    const term = document.getElementById('search-input')?.value.toLowerCase() || '';
    const min = parseFloat(document.getElementById('min-price')?.value) || 0;
    const max = parseFloat(document.getElementById('max-price')?.value) || Infinity;
    const rating = parseFloat(document.getElementById('rating-filter')?.value) || 0;
    const category = document.getElementById('category-filter')?.value || '';

    let baseList = currentView === 'home' ? allProducts : getFavorites();

    const filtered = baseList.filter(product => {
        const matchName = product.title.toLowerCase().includes(term);
        const matchPrice = product.price >= min && product.price <= max;
        const matchRating = product.rating?.rate >= rating;
        const matchCategory = category ? product.category === category : true;

        return matchName && matchPrice && matchRating && matchCategory;
    });

    render(filtered);
}

function setupEventListeners() {
    document.getElementById('nav-home').addEventListener('click', (e) => {
        e.preventDefault();
        currentView = 'home';
        applyFilters();
    });

    document.getElementById('nav-favs').addEventListener('click', (e) => {
        e.preventDefault();
        currentView = 'favorites';
        applyFilters();
    });

    document.getElementById('search-input').addEventListener('input', applyFilters);
    document.getElementById('min-price')?.addEventListener('input', applyFilters);
    document.getElementById('max-price')?.addEventListener('input', applyFilters);
    document.getElementById('rating-filter')?.addEventListener('change', applyFilters);

    document.getElementById('category-filter')?.addEventListener('change', applyFilters);
}

init();