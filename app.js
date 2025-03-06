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
//let color = "green";
//if(color === "red"){
  //  console.log("stop!,Light color is red");
//}
//if(color === "yellow"){
  //  console.log("Slow down, Light color is yellow");
//}
//if(color === "green"){
//    console.log("Go, Light color is green");
//}
//else{
  //  console.log("Traffic light is not working");
//}
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
//Logical opereators
// ques. write a program to a string starts with "a" and length>3 is a good string and others bad
let name = "abdul";
if(name[0] === "a" && name.length >= 3 ){
    console.log("Good String");
}
else{
    console.log("Bad String");
}
// truthy and falsey 

if(""){
    console.log("it has truthy value");
}else{
    console.log("it has falsy value");
}
// Switch statement
let color ="green";
switch(color){
    case "red":
        console.log("stop");
        break;
        case "yellow":
            console.log("slow down");
            break;
         case "green":
            console.log("Go");
            break;
           default :
           console.log("Broken Light");    
}
// ques. Print days using switch statement
let day = 5;
switch(day){
    case 1 :
        console.log("Monday");
        break;
        case 2 :
        console.log("Tuesday");
        break;
        case 3 :
        console.log("Wednesday");
        break;
        case 4 :
        console.log("Thursday");
        break;
        case 5 :
        console.log("Friday");
        break;
        case 6 :
        console.log("Saturday");
        break;
        case 7 :
        console.log("Sunday");
        break;
        default :
        console.log("Not a Day");
}
// Alerts and prompts
//let firstname = prompt("Enter your first name");
//let lastname = prompt("Enter your last name");
//console.log("Welcome", firstname, lastname, "!");
// string trim
//let password = prompt("Enter your password");
//let newpass = password.trim();
//console.log(newpass)
// string case
let str = "Random string";
let newstr = str.toUpperCase();
console.log(newstr);
// String methods with arguments
let z = "ILOVECODING";
z.indexOf("LOVE");
// method chaining
let msg1 = "   Hello    ";
let newmsg = msg1.toUpperCase().trim();
console.log(newmsg);
// slice
let p = "Ilovecoding";
console.log(p.slice(1,5));
console.log(p.slice(5));
console.log(p.slice(-6));
// Replace
console.log(p.replace("LOVE","DO"));
// Array
let Students = ["Abdul", "Priyanshu", "Veeru", "Dwatant"];
let nums = [2, 4, 6, 8]; 
console.log(nums[2]);
// mixing Array
let info = ["Abdul", 25, 6.1];
console.log(info.length);
// Accesing Array 
console.log(info[0][0]);
console.log(info[0].length);
// Array methods
let cars = ["Audi", "BMW", "XUV"];
//console.log(cars.push("Toyota"));
//console.log(cars.pop());
console.log(cars.unshift("Toyota"));
console.log(cars.shift("Toyota"));
// concatination and reverse
let primary = ["red", "yellow", "blue"];
let secondary = ["orange", "green", "violet"];
console.log(primary.concat(secondary));
console.log(primary.reverse());
// slice in array
// let colors = ["red", "yellow", "blue", "orange", "green"];
// console.log(colors.slice(3));
// console.log(colors.slice(2,4));
// console.log(colors.slice(-2));
// splice in array
let colors = ["red", "yellow", "blue", "orange", "green"];
console.log(colors.splice(1,1));
console.log(colors.splice(1,0, "indigo"));
console.log(colors.splice(1,0, "purple"));
// Array sorting
let alpha = ["d", "a", "c", "e"];
console.log(alpha.sort());
// Nested Arrays
let ar = [[2,4], [3,6], [4,8]];
// creating a nested array to show the following tic tac toe state written in copy
let game = [["X", null, "O"], [null, "X", null] ,["O", null, "X"]];
console.log(game);
// making a change to this array as written in copy
//console.log(game[0].slice(1,1, "O")); => This is not working . but why??
game[0][1] = "O";