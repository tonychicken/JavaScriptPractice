
const Cmodalbtn = document.querySelector('#btn-c');
const Fmodalbtn = document.querySelector('#btn-f');
const text = document.querySelector('#current-calculation');

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

  Cmodalbtn.addEventListener('click',()=>{
    const input = document.querySelector('#input-number').value;
    text.innerHTML =input +"C = " +(String)((input * 9 / 5 + 32).toFixed(2))+"F";
  });

  Fmodalbtn.addEventListener('click',()=>{
    const input = document.querySelector('#input-number').value;
    text.innerHTML =input + "F = "+ (String)(((input - 32) * 5 / 9).toFixed(2))+"C";
  });
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
      window.open('https://java-script-practice-qb7i.vercel.app/');
    });
  }
  })