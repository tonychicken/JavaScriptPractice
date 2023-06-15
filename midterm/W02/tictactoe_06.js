const reset_btn = document.querySelector('#reset');
const container = document.querySelector('#container');

const allLi = document.querySelectorAll('#board li');

let checkTurn = 0;
console.log(allLi)
const checkwin = (player) => {

    let p = [];
    allLi.forEach((item) => {
        p.push(item.classList.contains(player))
    });
    console.log(p)
    const [p1, p2, p3, p4, p5, p6, p7, p8, p9] = p;

    console.log(p)

    if (
        (p1&&p2&p3)||
        (p4&&p5&&p6)||
        (p7&&p8&&p9)||
        (p1&&p5&&p9)||
        (p3&&p5&&p7)||
        (p1&&p3&p5)||
        (p2&&p4&p6)||
        (p3&&p5&p9))
    {
        console.log("asdasdsadasd",player)
        return sop(player);
    } 
    else
    {
        return false;
    }


}
const sop=(player)=>{
    console.log("asdasdsadasd",player)
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
        console.log(item.textContent)
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