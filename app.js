console.log("Hello JavaScript");
let a=5;
let b=3;
console.log("sum is : ", a + b);
// Template literals
let pencilPrice = 10;
let eraserPrice = 5;
console.log(`Total price is ${pencilPrice + eraserPrice} Rupees`);
// Operators in Js
console.log(a++); // 5
console.log(a--); // 7
// comparison operators 
let age = 16;
console.log(age>16);
console.log(age<16);
// if statement
if(age > 18){
    console.log("you can vote");
    console.log("you can drive");
}
if(age < 18){
    console.log("you cannot vote");
    console.log("you cannot drive");
}
// Building traffic signals
let color = "green";
if(color === "red"){
    console.log("stop!,Light color is red");
}
if(color === "yellow"){
    console.log("Slow down, Light color is yellow");
}
if(color === "green"){
    console.log("Go, Light color is green");
}
else{
    console.log("Traffic light is not working");
}
// Using elseif statement
let marks = 75;
if(marks >= 80){
    console.log("A+");
}
else if(marks >= 60) {
    console.log("A");
}
else if(marks >= 33) {
    console.log("B");
}
else if(marks <= 33) {
    console.log("FAIL");
}
// Using nested else if
let y = 45;
if(y >= 33){
    console.log("PASS");
    if(y >= 80){
        console.log("A+");
    }else {
        console.log("A");
    }
}
else{
    console.log("Better luck next time");
}