'use strict';

const modal1 = document.querySelector('.modal-1');
const modal2 = document.querySelector('.modal-2');
const modal3 = document.querySelector('.modal-3');
const overlay = document.querySelector('.overlay');
const btnsCloseModal = document.querySelectorAll('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log('modal', modal1);
console.log('show-modal', btnsCloseModal);

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