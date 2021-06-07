var element;
// element= document;
// element= document.all[2];
// element= document.head;
// element= document.body;
// element= document.links[0];//for links in the document..//for specific link
// element= document.images;//for targeting images
// element= document.doctype;
// element= document.URL;
// element= document.domain;
// element= document.baseURI;//return whole url

// element= document.getElementById("heading");
// element= document.getElementsByClassName("heading1");
function changeColor() {
    element = document.querySelector("#heading").style.border = "2px solid black";//getting style value
    console.log(element);
    //set value to HTMl element
    element = document.querySelector("#heading").style.color = "white";
    console.log(element);
    element = document.querySelector("#heading").style.backgroundColor = "teal";
    console.log(element);
    element = document.querySelector(".heading1").className;
    console.log(element);
}
