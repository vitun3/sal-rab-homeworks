// Задание 4.1. Вывод карточек товаров

function parseProducts(json) {
    let data = JSON.parse(json);;
    let products = data.products;
    return products;
}

function renderProductsCards(json) {
    clearProducts();
    let products = parseProducts(json);;
    let length = products.length;
    for (i = 0; i < length ; i++) {
    addProduct(products[i]);    
    }
}
