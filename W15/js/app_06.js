// const url = `https://course-api.com/javascript-store-products`;
const url = './api/products.json';
const pContainer = document.querySelector('.products-container ');
const companyBtns = document.querySelectorAll('.company-btn')
console.log(companyBtns)
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

const displayProducts = (products) => {
    let displaycontent = products.map((product) => {
        const { company, name, price, image } = product.fields;
        return `
<div class="single-product">
<img
src=${image[0].url}
class="single-product-img img"
alt=${name}
/>
<footer>
<h5 class="name">${name}</h5>
<span class-"price">$${price / 100}</span>
</footer>
</div>`
    }).join('');
    pContainer.innerHTML = displaycontent;
}

companyBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const companyId = e.currentTarget.dataset.id;
        console.log(companyId)
        if (companyId === 'all') {
            console.log(`all products `, allproducts);
            displayProducts(allproducts);
        } else {
            products = allproducts.filter((p) => p.fields.company === companyId);
            console.log(`${companyId} products`, products);
            displayProducts(products);
        }
    });
});

window.addEventListener('DOMContentLoaded', async () => {
    allproducts = await fetchData();
    console.log('all products', allproducts);
    await displayProducts(allproducts);
});