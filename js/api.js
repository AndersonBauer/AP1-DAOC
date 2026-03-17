export async function getProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        return await response.json();
    } catch (error) {
        console.error("Erro ao buscar produtos:", error);
    }
}