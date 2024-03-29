// // local reviews data
// const reviews = [
//   {
//     id: 1,
//     name: 'susan smith',
//     job: 'web developer',
//     img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
//     text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
//   },
//   {
//     id: 2,
//     name: 'anna johnson',
//     job: 'web designer',
//     img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
//     text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
//   },
//   {
//     id: 3,
//     name: 'peter jones',
//     job: 'intern',
//     img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
//     text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
//   },
//   {
//     id: 4,
//     name: 'bill anderson',
//     job: 'the boss',
//     img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
//     text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
//   },
// ];

// const img = document.querySelector('#person-img');
// const author = document.querySelector('#author');
// const job = document.querySelector('#job');
// const info = document.querySelector('#info');

// const prevBtn = document.querySelector('.prev-btn');
// const nextBtn = document.querySelector('.next-btn');
// const randomBtn = document.querySelector('.random-btn');

// let Count=0;
// ShowReviews=(person)=>{
//   const item =  reviews[person];
//   img.src=item.img;
//   author.textContent=item.name;
//   job.textContent=item.job;
//   info.textContent=item.text;
//   console.log(item)
// };
// window.addEventListener('DOMContentLoaded',()=>{
//   ShowReviews(Count);
// });

// nextBtn.addEventListener('click',()=>{
//   Count++
//   if(Count>=reviews.length){
//     Count=0;
//   }
//   ShowReviews(Count);
// });

// prevBtn.addEventListener('click',()=>{
//   Count--
//   if(Count<0){
//     Count=reviews.length-1;
//   }
//   ShowReviews(Count);
// });

// randomBtn.addEventListener('click',()=>{
//   Count=Math.floor(Math.random()*reviews.length);
//   ShowReviews(Count);
// });


const ClassdemoOpenBtn = document.querySelector('#navbarDropdownClassDemo');
const ClassDemo = document.querySelector('#dropdown_ClassDemo');
console.log(ClassDemo)
ClassdemoOpenBtn.addEventListener('click', () => {
  if (ClassDemo.classList.contains('show')) {
    ClassDemo.classList.remove("show")
  } else {
    ClassDemo.classList.add("show");
  }
});

const gitlink = document.querySelectorAll('.nav-link');
gitlink.forEach((item) => {
  if (item.classList.contains('github')) {
    item.addEventListener('click', () => {
      window.open('https://github.com/tonychicken/JavaScriptPractice.git');
    });
  }
  if (item.classList.contains('githubURL')) {
    item.addEventListener('click', () => {
      window.open('https://github.com/tonychicken/JavaScriptPractice/commits/main');
    });
  }

  if (item.classList.contains('vercel')) {
    item.addEventListener('click', () => {
      window.open('https://java-script-practice-qb7i.vercel.app/');
    });
  }
})



const ShowDemo = ((week) => {
  if (ClassDemo.classList.contains('show')) {
    ClassDemo.classList.remove("show")
  } else {
    ClassDemo.classList.add("show");
  }
  const content = document.querySelector('#content');

  switch (week) {
    case 'W1':
      content.innerHTML = `<iframe src="./W01/index.html" style="width: 100%; height: 800px;" ></iframe>`;
      break;
    case 'W1-MD':
      content.innerHTML = `<zero-md src="./MD/W01/W01.md"></zero-md>`;
      break;
    case 'W2':
      content.innerHTML = `<iframe src="./W02/tictactoe_06.html" style="width: 100%; height: 800px;" ></iframe>`;
      break;
    case 'W2-MD':
      content.innerHTML = `<zero-md src="./MD/W02/W02.md"></zero-md>`;
      break;
    case 'W3':
      content.innerHTML = `<iframe src="./W03/index.html" style="width: 100%; height: 800px;" ></iframe>`;
      break;
    case 'W3-MD':
      content.innerHTML = `<zero-md src="./MD/W03/W03.md"></zero-md>`;
      break;
    case 'W4':
      content.innerHTML = `<iframe src="./W04/index.html" style="width: 100%; height: 800px;" ></iframe>`;
      break;
    case 'W4-MD':
      content.innerHTML = `<zero-md src="./MD/W04/W04.md"></zero-md>`;
      break;
    case 'W5':
      content.innerHTML = `<iframe src="./W05/index.html" style="width: 100%; height: 800px;" ></iframe>`;
      break;
    case 'W5-MD':
      content.innerHTML = `<zero-md src="./MD/W05/W05.md"></zero-md>`;
      break;
    case 'W6':
      content.innerHTML = `<iframe src="./W06/index.html" style="width: 100%; height: 800px;" ></iframe>`;
      break;
    case 'W6-MD':
      content.innerHTML = `<zero-md src="./MD/W06/W06.md"></zero-md>`;
      break;
    case 'W11':
      content.innerHTML = `<iframe src="./W11/index.html" style="width: 100%; height: 800px;" ></iframe>`;
      break;
    case 'W11-MD':
      content.innerHTML = `<zero-md src="./MD/W11/W11.md"></zero-md>`;
      break;
    case 'W12':
      content.innerHTML = `<iframe src="./W12/index.html" style="width: 100%; height: 800px;" ></iframe>`;
      break;
    case 'W12-MD':
      content.innerHTML = `<zero-md src="./MD/W12/W12.md"></zero-md>`;
      break;
    case 'W13':
      content.innerHTML = `<iframe src="./W13/index.html" style="width: 100%; height: 800px;" ></iframe>`;
      break;
    case 'W13-MD':
      content.innerHTML = `<zero-md src="./MD/W13/W13.md"></zero-md>`;
      break;
    case 'W14':
      content.innerHTML = `<iframe src="./W14/index.html" style="width: 100%; height: 800px;" ></iframe>`;
      break;
    case 'W14-MD':
      content.innerHTML = `<zero-md src="./MD/W14/W14.md"></zero-md>`;
      break;
    case 'W15':
      content.innerHTML = `<iframe src="./W15/index.html" style="width: 100%; height: 800px;" ></iframe>`;
      break;
    case 'W15-MD':
      content.innerHTML = `<zero-md src="./MD/W15/W15.md"></zero-md>`;
      break;
    case 'W16':
      content.innerHTML = `<iframe src="./W16/index.html" style="width: 100%; height: 800px;" ></iframe>`;
      break;
    case 'W16-MD':
      content.innerHTML = `<zero-md src="./MD/W16/W16.md"></zero-md>`;
      break;
    case 'W17':
      content.innerHTML = `<iframe src="./W17/index.html" style="width: 100%; height: 800px;" ></iframe>`;
      break;
    case 'W17-MD':
      content.innerHTML = `<zero-md src="./MD/W17/W17.md"></zero-md>`;
      break;
    case 'W18':
      content.innerHTML = `<iframe src="./W18/index.html" style="width: 100%; height: 800px;" ></iframe>`;
      break;
    case 'W18-MD':
      content.innerHTML = `<zero-md src="./MD/W18/W18.md"></zero-md>`;
      break;
    default:
      content.innerHTML = `<h2>No content available for this week yet.</h2>`;
  }

})




