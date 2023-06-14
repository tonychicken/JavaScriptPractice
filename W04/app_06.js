import { menu } from "./data.js";

  window.addEventListener('DOMContentLoaded',()=>{
    displayMenuItems(menu);
    displayMenuButtons();
  })
  
  const sectionCenter=document.querySelector('.section-center');
  const btnContainer = document.querySelector('.btn-container');
  
  const displayMenuItems=(menuItems)=>{
    let displayMenu=menuItems.map((item)=>{
  
      return`
      </article>
      <article class="menu-item">
        <img src="${item.img}" alt=${item.title} class="photo">
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
          </header>
          <p class="item-text">
            ${item.desc}
          </p>
        </div>
      </article>  
      `
    })
    displayMenu=displayMenu.join("");
  
  
    sectionCenter.innerHTML = displayMenu;
  }
  
  const displayMenuButtons=()=>{
    const categories = menu.reduce((values,item)=>{
      if(!values.includes(item.category)){
        values.push(item.category);
      }
      return values;
    },['all']);
  
    const categoryBtns=categories.map((category)=>{
      return `<button type="button" class="filter-btn" data-id=${category}>${category}</button>`
    })
    .join('');
  
    console.log('categoryBtns before join',categoryBtns);
    btnContainer.innerHTML=categoryBtns;
  
  
    const filterBtns=btnContainer.querySelectorAll('.filter-btn')
    console.log('categoryBtns after join',filterBtns);
    filterBtns.forEach((btn)=>{
      btn.addEventListener('click',(e)=>{
        console.log('data-id',e.currentTarget.dataset.id);
        const category=e.currentTarget.dataset.id;
        const menuCategory= menu.filter((menuItem)=>{
          if(menuItem.category===category){
            return menuItem;
          }
        });
        if(category =='all'){
          displayMenuItems(menu);
          console.log("filterMenu",menu);
        }else{
          displayMenuItems(menuCategory);
          console.log("filterMenu",menuCategory);
        }
      });
    });
  }

