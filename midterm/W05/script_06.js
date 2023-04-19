'use strict';

const modal1 = document.querySelector('.modal-1');
const modal2 = document.querySelector('.modal-2');
const modal3 = document.querySelector('.modal-3');
const overlay = document.querySelector('.overlay');
const btnsCloseModal = document.querySelectorAll('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log('modal', modal1);
console.log('show-modal', btnsCloseModal);
const ClassdemoOpenBtn = document.querySelector('#navbarDropdownClassDemo');
const ClassDemo = document.querySelector('#dropdown_ClassDemo');
console.log(ClassDemo)
ClassdemoOpenBtn.addEventListener('click',()=>{
  if(ClassDemo.classList.contains('show')){
    ClassDemo.classList.remove("show")
  }else{
    ClassDemo.classList.add("show");
  }
});

const openModal = (index) => {
    if (index == 1) {
        modal1.classList.remove('hidden');
    } else if (index == 2) {
        modal2.classList.remove('hidden');
    } else if (index == 3) {
        modal3.classList.remove('hidden');
    }
}

const CloseModal = (index) => {
    if (index == 1) {
        modal1.classList.add('hidden');
    } else if (index == 2) {
        modal2.classList.add('hidden');
    } else if (index == 3) {
        modal3.classList.add('hidden');
    }
}

for (let i = 0; i < btnsCloseModal.length; i++) {
    btnsCloseModal[i].addEventListener('click', CloseModal(i));
}
for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal(i));
}

const gitlink = document.querySelectorAll('.nav-link');
gitlink.forEach((item)=>{
if(item.classList.contains('github')){
  item.addEventListener('click', () => {
    window.open('https://github.com/tonychicken/JavaScriptPractice.git');
  });
}
if(item.classList.contains('githubURL')){
    item.addEventListener('click', () => {
      window.open('https://github.com/tonychicken/JavaScriptPractice/commits/main');
    });
  }
  if(item.classList.contains('vercel')){
    item.addEventListener('click', () => {
      window.open('https://github.com/tonychicken/JavaScriptPractice/commits/main');
    });
  }
})