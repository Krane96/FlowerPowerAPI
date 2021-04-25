const queryString = window.location.search;
const id = new URLSearchParams(queryString).get('id');


const url = `https://www.martinlk.no/wp-json/wc/store/products/${id}`;
fetch(url)
.then(response => response.json())
.then(data => {
    console.log('Success:', data);
    displayProductDetails(data);
})
.catch((error) => {
    console.error('Error', error);
})

const displayHTML = document.querySelector("#product");
function displayProductDetails (data) {
   // console.log(data);

    let content = `
    <div class="productDetails-1">
    <img src="${data.images[0].src}" alt="${data.name}">
    </div>
    <div class="productDetails-2">
    <h1>${data.name}</h1>
    <p>${data.price_html}</p>
    <p>${data.short_description}</p>
    <input type="number" value="1"></input>
    <button class="pinkButton">${data.add_to_cart.text}</button>
    <h3>Description</h3>
    <p>${data.description}</p>
    </div>
    `

    displayHTML.innerHTML = content;
    
}