export const getFavorites = () => JSON.parse(localStorage.getItem('favs')) || [];

export const toggleFavorite = (product) => {
    let favs = getFavorites();
    const index = favs.findIndex(item => item.id === product.id);
    
    if (index > -1) {
        favs.splice(index, 1); // Remove se já existir
    } else {
        favs.push(product); // Adiciona se não existir
    }
    
    localStorage.setItem('favs', JSON.stringify(favs));
};