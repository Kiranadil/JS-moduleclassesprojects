let scores=[2,4,6,8,6,5]; //array of numbers

function calculateAverage(){
let sum=0;
// for(let i=0;i<scores.length;i++){
//     sum=sum + scores[i];
// }
scores.forEach(function(score){
    sum = sum + score;
    console.log(sum);
})
let average = sum/scores.length;
console.log("the sum is " + sum);
console.log(average);
}

let a =["sanjay", "Aman", "Ali","Aman"];
document.write(a + "<br><br>");
let b =a.indexOf("Aman",2);
document.write(b + "<br><br>");