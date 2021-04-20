const queryString = window.location.search;
const id = new URLSearchParams(queryString).get('id');
if (!id) { window.location = "products.html"; }

const url = "https://www.martinlk.no/wp-json/wp/v2/products/${id}"
fetch(url)
.then(response => response.json())
.then(data => {
    console.log('Success:', data);
    listProducts(data);
})
.catch((error) => {
    console.error('Error', error);
})

const output = document.querySelector("#product");
function displayProduct (data) {
    console.log(data);
    const name = data.name;
    const excerpt = data.excerpt;
    const link = data.link;

    let content = `
    <h1>${name}</h1>
    ${excerpt}
    <p>&gt; <a href="${link}" target="_blank">Read more </a></p>
    ;`

    output.innerHTML = content;
    document.name = name;
}