const reset_btn = document.querySelector('#reset');
const container = document.querySelector('#container');

const allLi = document.querySelectorAll('#board li');
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
let checkTurn = 0;
const checkwin = (player) => {

    let p = [];
    allLi.forEach((item) => {
        p.push(item.classList.contains(player))
    });
    const [p1, p2, p3, p4, p5, p6, p7, p8, p9] = p;


    if (
        (p1&&p2&p3)||
        (p4&&p5&&p6)||
        (p7&&p8&&p9)||
        (p1&&p5&&p9)||
        (p3&&p5&&p7)||
        (p1&&p4&p7)||
        (p2&&p5&p8)||
        (p3&&p6&p9))
    {
        console.log(player)
        return sop(player);
    } 
    else
    {
        return false;
    }


}
const sop=(player)=>{
    if(player=='o'){
        container.style.backgroundColor="green"
        console.log(player+"贏了")
        alert(player+"贏了")
    }else{
        container.style.backgroundColor="red"
        console.log(player+"贏了")
        alert(player+"贏了")
    }
}

allLi.forEach((item) => {
    item.addEventListener('click', () => {
        if (item.classList.contains('disable')) {
            alert("already feiled")
        } else if (checkTurn % 2 === 0) {
            item.textContent = 'o';
            item.classList = 'o disable';
        } else if (checkTurn % 2 === 1) {
            item.textContent = 'x';
            item.classList = 'x disable';
        }

        if (checkTurn < 8) {
            checkTurn++
        }
        checkwin(item.textContent)
    })
});


const reset = () => {
    allLi.forEach((item) => {
        checkTurn=0;
        container.style.backgroundColor="#666"
        item.textContent = '+';
        item.classList = '';
        console.log(checkTurn)
    });
}

console.log('checkwin(o)', checkwin('o'))
console.log('checkwin(x)', checkwin('x'))
reset_btn.addEventListener('click', reset);

const gitlink = document.querySelectorAll('.nav-link');
gitlink.forEach((item)=>{
if(item.classList.contains('github')){
    console.log(item.classList)
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