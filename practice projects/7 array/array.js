function addNewName(){
    let newName = document.querySelector("input").value;
    students.push(newName);
    console.log(students.push(newName))
}
function displayNames(){
    for ( let i = 0; i< students.length; i++){
        console.log("student#"+ (i) +  students[i]);
    }

}
let students = [0,29,78,30,6,3,2,1,5,67, 45,67,75]; // array
// roll number--> index
for ( let i = 0; i< students.length; i++){
    console.log("student#"+ (i+1) +  students[i]);
}
//for loop in an array
let myArray = ["one","two", "three","four"];

    for(let i=0; i<myArray.length ; i++)
    {
      console.log(myArray[i]);
    }
