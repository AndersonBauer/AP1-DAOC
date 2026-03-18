export const getFavorites = () => JSON.parse(localStorage.getItem('favs')) || [];

export const toggleFavorite = (product) => {
    let favs = getFavorites();
    const index = favs.findIndex(item => item.id === product.id);
    
    if (index > -1) {
        favs.splice(index, 1); 
    } else {
        favs.push(product); 
    }
    
    localStorage.setItem('favs', JSON.stringify(favs));
};