const url = "https://www.martinlk.no/wp-json/wc/store/products";
const productContainer = document.querySelector(".products");

async function getProducts(){
    try {
        const response = await fetch(url);
        const getResults = await response.json();
        createHTML(getResults);
        console.log(getResults);
    }

    catch(error){
        console.log(error);
    }
}

getProducts();

function createHTML(products){
    products.forEach(function(product){
        productContainer.innerHTML +=
        `<div class="product">
        <a href="product.html?id=${product.id}">
        <img src="${product.images[0].src}" alt="${product.name}">
        </a>
        <h2>${product.name}</h2>
        <p>${product.price_html}</p>
        <button>${product.add_to_cart.text}</button>
        </div>
        `
    })
}