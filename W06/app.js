
const Cmodalbtn = document.querySelector('#btn-c');
const Fmodalbtn = document.querySelector('#btn-f');
const text = document.querySelector('#current-calculation');


  Cmodalbtn.addEventListener('click',()=>{
    const input = document.querySelector('#input-number').value;
    text.innerHTML =input +"C = " +(String)((input * 9 / 5 + 32).toFixed(2))+"F";
  });

  Fmodalbtn.addEventListener('click',()=>{
    const input = document.querySelector('#input-number').value;
    text.innerHTML =input + "F = "+ (String)(((input - 32) * 5 / 9).toFixed(2))+"C";
  });