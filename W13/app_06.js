const supabaseUrl = 'https://mlybsphqojjqadpysauq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1seWJzcGhxb2pqcWFkcHlzYXVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgzNzgzMzYsImV4cCI6MTk5Mzk1NDMzNn0.MLaH9ADLG7fe2gVsXmiKOpsUwfi41lM7KlpFV2BiTx8'

let menu;

const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

const url = 'https://mlybsphqojjqadpysauq.supabase.co/rest/v1/tblmenu?select=*'

const displayMenuItems = (menu) => {
  let displayMenu = menu.map((item) => {
    return `
      </article>
      <article class="menu-item">
        <img src=${item.Remote_img} alt=${item.title} class="photo">
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
          </header>
          <p class="item-text">
            ${item.descrip}
          </p>
        </div>
      </article>  
      `
  })
  displayMenu = displayMenu.join("");


  sectionCenter.innerHTML = displayMenu;
}

const displayMenuButtons = () => {
  console.log(menu)
  const categories = ['all', ...new Set(menu.map((item) => item.category))];
  console.log(categories)
  let menuBottons = categories.map((category) => {
    return `<button type="button" class="filter-btn" data-id=${category}>${category}</button>`
  });
  menuBottons = menuBottons.join('');

  console.log('categoryBtns before join', menuBottons);
  btnContainer.innerHTML = menuBottons;


  const filterBtns = document.querySelectorAll('.filter-btn')
  console.log('menuBottons after join', filterBtns);
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      console.log('data-id', e.currentTarget.dataset.id);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category == 'all') {
        displayMenuItems(menu);
        console.log("filterMenu", menu);
      } else {
        displayMenuItems(menuCategory);
        console.log("filterMenu", menuCategory);
      }
    });
  });
}

const fetchdata = async () => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        apikey: `${supabaseKey}`,
        Authorization: `Bearer ${supabaseKey}`
      }
    })
    const data = await response.json();
    return data;
  } catch (error) {
  }
}
window.addEventListener('DOMContentLoaded', async () => {
  menu = await fetchdata();
  console.log(menu)
  await displayMenuItems(menu);
  await displayMenuButtons();
})
