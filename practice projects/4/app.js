function login(){
    // console.log('Hello world');
    let inputElement =document.querySelector('#fname');
    console.log(inputElement);
     let inputElement1=document.querySelector('#lname');
    console.log(inputElement1);
//     let attrValue=document.querySelector('input').type;
//     console.log(attrValue);
// 
    let  inputValue= fname .value;
    console.log(inputValue);

     let inputValue1= lname .value;
    console.log(inputValue1);

    let headingElement=document.querySelector('h1 > #fname');
    console.log(headingElement);
    headingElement.innerHTML = inputValue;
    
    let headingElement1=document.querySelector('h1 > #lname');
    console.log(headingElement1);
    headingElement1.innerHTML = inputValue1;
}