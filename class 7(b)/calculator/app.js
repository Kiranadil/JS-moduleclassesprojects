function addNumbers(){
    let num1=parseInt(document.querySelector("#firstNumber").value);
    let num2=parseInt(document.querySelector("#secondNumber").value);
    let result=parseInt(num1)+parseInt(num2);
    const list=document.querySelector("#result > span");
    list.append(result);
    console.log(result);
}
function subtractNumbers(){
    let num1=parseInt(document.querySelector("#firstNumber").value);
    let num2=parseInt(document.querySelector("#secondNumber").value);
    let result=parseInt(num1)-parseInt(num2);
    const list=document.querySelector("#result > span");
    list.append(result);
    console.log(result);
}
function multiplyNumbers(){
    let num1=parseInt(document.querySelector("#firstNumber").value);
    let num2=parseInt(document.querySelector("#secondNumber").value);
    let result=parseInt(num1) * parseInt(num2);
    const list=document.querySelector("#result > span");
    list.append(result);
    console.log(result);
}
function divideNumbers(){
    let num1=parseInt(document.querySelector("#firstNumber").value);
    let num2=parseInt(document.querySelector("#secondNumber").value);
    let result=parseInt(num1) / parseInt(num2);
    const list=document.querySelector("#result > span");
    list.append(result);
    console.log(result);
}