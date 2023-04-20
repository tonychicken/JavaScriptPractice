const number = document.querySelector('#input-number');
const add_btn = document.querySelector('#btn-add');
const subtract_btn = document.querySelector('#btn-subtract');
const multiply_btn = document.querySelector('#btn-multiply');
const divide_btn = document.querySelector('#btn-divide');



const calculation = document.querySelector('#current-calculation');
const result = document.querySelector('#current-result');


const resultTemp=0;
let CurrentResult=resultTemp;

function getuserInput(){
    return parseInt(number.value);
}

function outputresult(calculation123,result123){
    calculation.textContent=calculation123;
    result.textContent=result123
}

function add(){
    const op1=CurrentResult;
    const op2=getuserInput();

    CurrentResult+=op2
    calText=`${op1}+${op2}`;
    console.log(calText)
    outputresult(calText,CurrentResult);

}
add_btn.addEventListener('click',add);



function subtract(){
    const op1=CurrentResult;
    const op2=getuserInput();

    CurrentResult-=op2
    calText=`${op1}-${op2}`;
    console.log(calText)
    outputresult(calText,CurrentResult);

}
subtract_btn.addEventListener('click',subtract);



function multiply(){
    const op1=CurrentResult;
    const op2=getuserInput();

    CurrentResult*=op2
    calText=`${op1}*${op2}`;
    console.log(calText)
    outputresult(calText,CurrentResult);

}
multiply_btn.addEventListener('click',multiply);



function divide(){
    const op1=CurrentResult;
    const op2=getuserInput();

    CurrentResult/=op2
    calText=`${op1}/${op2}`;
    console.log(calText)
    outputresult(calText,CurrentResult);

}
divide_btn.addEventListener('click',divide);