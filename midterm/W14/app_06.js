const btn = document.querySelector('.btn');

btn.addEventListener('click', async () => {
  const url= 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';
  try {
    const response = await fetch(url);
    
    const result = await response.json();
    console.log(result);
    console.log(result.drinks);
    displayItems(result.drinks)
  } catch (error) {
    console.error(error);
  }
});


const displayItems = (items) => {
  const displayData = items
    .map((item) => {
      const  {strDrink}  = item;
      return `<p>${strDrink} </p>`;
    }).join('');
  const element = document.createElement('div');
  element.innerHTML = displayData;
  document.body.appendChild(element)
};

