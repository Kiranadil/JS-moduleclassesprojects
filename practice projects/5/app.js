// let cash =1500;
// console.log(cash);

// cash=200;
// console.log(cash);

// const months =12;
// console.log(months)

// get all these elements
const redButton=document.querySelector(".red");
const blueButton=document.querySelector(".blue");
const greenButton=document.querySelector(".green");

redButton.addEventListener('click',clickBtn);
blueButton.addEventListener('mouseover',changeBgColor);
// greenButton.addEventListener('');

function clickBtn(){
    alert('hello');
}
function changeBgColor(){
    blueButton.style.backgroundColor="blue";
    blueButton.style.color="white";
    redButton.style.visibility='hidden';
    greenButton.style.style.font-size="32px";
}

