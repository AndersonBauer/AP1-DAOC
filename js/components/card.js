export function ProductCard(product, isFavorite) {
    return `
        <div class="card">
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>

            <p class="rating">⭐ ${product.rating.rate}</p>

            <p>R$ ${product.price}</p>

            <button class="fav-btn" data-id="${product.id}">
                ${isFavorite ? '❤️ Remover' : '🤍 Favoritar'}
            </button>
        </div>
    `;
}