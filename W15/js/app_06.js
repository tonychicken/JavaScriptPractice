// const url = `https://course-api.com/javascript-store-products`;
const url = './api/products.json';
const pContainer = document.querySelector(' products-container ');
let allproducts;
let products;

const fetchData = async () => {
    try {
        const response = await fetch(url);
        const data = response.json();
        console.log('fetch data', data);
        return data;
    } catch (err) {
        console.log(err);
    }
}

const displayProducts = (products)=>{
let displaycontent = products.map( (product) => {
const {company, name, price, image } = product.fields;
return`
<div class="single-product">
<img
src=${image[0].url}
class="single-product-img img"
alt=${name}
/>
<footer>
<h5 class="name">${name}</h5>
<span class-"price">$${price/100}</span>
</footer>
</div>`
}).join('');
console.log('displaycontent', displaycontent);
pContainer.innerHTML = displaycontent;
}

window.addEventListener('DOMContentLoaded' , async () => {
    allproducts = await fetchData();
    console.log('all products', allproducts);
    await displayProducts(allproducts);
});