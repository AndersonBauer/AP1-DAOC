export function Header() {
    return `
        <header class="header">
            <div class="header-container">
                
                <h1 class="logo">🛍️ Store</h1>

                <nav class="nav">
                    <a href="#" id="nav-home">Home</a>
                    <a href="#" id="nav-favs">Favoritos</a>
                </nav>

                <div class="filters">
                    <input 
                        type="text" 
                        id="search-input" 
                        placeholder="Buscar produtos..."
                    >

                    <input type="number" id="min-price" placeholder="Min R$">
                    <input type="number" id="max-price" placeholder="Max R$">

                    <select id="rating-filter">
                        <option value="">Avaliação</option>
                        <option value="4">⭐ 4+</option>
                        <option value="3">⭐ 3+</option>
                        <option value="2">⭐ 2+</option>
                    </select>

                    <!--  NOVO -->
                    <select id="category-filter">
                        <option value="">Categoria</option>
                    </select>

                    <button id="theme-toggle">🌙</button>
                </div>
            </div>
        </header>
    `;
}