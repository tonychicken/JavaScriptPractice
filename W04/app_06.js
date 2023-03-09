const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/06001.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/06002.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "dinner",
      price: 6.99,
      img: "./images/06003.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
  ];
  
  
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
        }else{
          displayMenuItems(menuCategory);
        }
      });
    });
  }
  