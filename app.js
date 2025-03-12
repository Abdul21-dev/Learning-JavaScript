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
// LOOPS
for(let i=1; i<=5; i++){
    console.log(i);
}
console.log("Odd numbers");
// Printing all odd numbers till 15
for(let i=1; i<=15; i= i+2){
    console.log(i);
}
console.log("even numbers");
// Printing all even numbers till 10
for(let i=2; i<=10; i= i+2){
    console.log(i);
}
console.log("printing table of 5");
// printing table of 5
for(i=5; i<=50; i=i+5){
    console.log(i);
}
// printing table of any number
//let n = prompt("Enter your number");
  //  n = parseInt(n);
   // console.log("printing table of", n);
    //for(i=n; i<=n*10; i=i+n){
      //  console.log(i);
    //}
    
    // Nested loops
    for(let i=1; i<=3; i++){
        console.log("outer loop number:", i);
        for(let j=1; j<=3; j++){
            console.log(j);
        }
    }
    // While loops
    console.log("printing through while loop");
   let t = 1;
    while(t<=5){
        console.log(t);
        t++;
    }
    // movie guessing game
   // let favMovie = "Avatar";
    //let guess = prompt("Guess the favourite movie");
    // while((guess != favMovie)&&(guess != "quit")){
       // guess = prompt("Wrong! Please Try again");
    // }
    // if(guess == favMovie){
      //  console.log("congrats! you are correct");
    // }else{
       // console.log("You quit. Thanks for participating");
   // }
    // using break key word
    let o = 1;
    while(o<=5){
        if(o == 3){
            break;
        }
        console.log(o);
        o++;
    }
    // Loops with Array
    console.log("Loops with array");
    let fruits = ["mango", "apple", "banana", "litchi", "orange"];
    for(let i=0; i<fruits.length; i++){
        console.log(`${i+1} ${fruits[i]}`);
    }
    console.log("printing the same thing backwards");
    for(let i=fruits.length-1; i>=0; i--){
        console.log(`${i+1} ${fruits[i]}`);
    }
    // Nested array with nested loops
    console.log("Nested array with nested loops");
    let heroes=[["ironman", "spiderman", "thor"], ["superman", "wonder women", "flash"]];
       for(let i=0; i<heroes.length; i++){
        console.log(`${i+1} ${heroes[i]}`);
        for(let j=0; j<heroes[i].length; j++){
            console.log(`j=${j+1} ${heroes[i][j]}`);
        }
            }
            // question on Nested array with nested loops
            // print student name with marks
            let students = [["Abdul",99], ["Veeru",33], ["Yash",76]];
            for(let i=0; i<students.length; i++){
                console.log("info of student", i+1);
                for(let j=0; j<students[i].length; j++){
                    console.log(j+1, students[i][j]);
                }
            }
            // Creating a small to-do app
            // let todo =[];
            // let req = prompt("please enter your request.");

            // while(true){
              //  if(req == "quit"){
             //       console.log("You quitted");
               //     break;
               // }
            // if(req == "list"){
               // console.log("-----------");
                // for(let i=0; i<todo.length; i++){
                   // console.log(i, todo[i]);
                // }
                // console.log("-----------");
            // }else if(req == "add"){
               // let task = prompt("please add your task");
                // todo.push(task);
                // console.log("task added");
            // }else if(req == "delete"){
               // let idx = prompt("Enter the index you want to delete");
                // todo.splice(idx, 1);
                // console.log("task deleted");
            // }else{
              //  console.log("please add a valid request");
            // }
            // req = prompt("please enter your request.");
         // }
        // Object literals
    //     const client = {
    //         name: "Abdul",
    //         age: 20,
    //         marks: 92,
    //         city: "Allahabad"
    //   };
          const items = {
            price: 100,
            discount: 50,
            color: ["red", "pink"]
          };
          //console.log(client, items);
          // creating an object literal for the properties of twitter post
          const post ={
            username: "Abdul",
            content: "India won champions trophy",
            likes: 183,
            reposts: 82,
            tags: ["@viratkohli", "@Ro45"]
          };
          console.log(post);
          // getting values in object literals
          console.log(post.likes);
          console.log(post["content"]);
          console.log(post.tags[0]);
          // adding/updating value
          const client = {
            name: "Abdul",
            age: 20,
            marks: 92,
            city: "Allahabad"
      };
      client.city = "Mumbai";
      client.gender = "Male";
      client.marks = 95;
      console.log(client);
      // object of objects
    //   const classinfo = {
    //    Abdul: {
    //     grade: "O",
    //     city: "Allahabad"
    //    },
    //    Veeru: {
    //     grade:"A+",
    //     city:"Kanpur"
    //    },
    //    Yash: {
    //     grade:"A++",
    //     city:"Lakimpur"
    //    }
    //   };
    //   classinfo.Veeru.city = "Bangra";
    //   console.log(classinfo);
      // Array of objects
      const classinfo = [
        {name: "Abdul",
            grade: "O",
            city: "Allahabad"
           },
           { name: "Veeru",
            grade:"A+",
            city:"Kanpur"
           },
           { name: "Yash",
            grade:"A++",
            city:"Lakimpur"
           }
      ];
      console.log(classinfo);
      //printing random integers using maths
      let ra = Math.floor(Math.random()*10) + 1;
      console.log(ra);
      // Guessing game
    //   const max = prompt("enter the max number");
    //   const random = Math.floor(Math.random() * max) + 1;
    //   let guess = prompt("Guess the number");
    //   while(true){
    //     if(guess == "quit"){
    //         console.log("user quitted!!");
    //         break;
    //     }
    //     if(guess == random){
    //         console.log("Congrats! you are right, the random number is", random);
    //         break;
    //     }else if(guess < random){
    //         guess = prompt("Your number is too small, please try again");
    //     }else{
    //         guess = prompt("Your number is too big, please try again");
    //     }
     // };
       // Functions in js
       function hello(){
               console.log("hello!");  
       }
       hello();
       // write a function to roll a dice to bring the outcome from 1 to 6
          function rollDice(){
            let rand = Math.floor(Math.random() * 6) + 1;
            console.log(rand);
          }
          rollDice();
        // Function with Arguments
        function printInfo(name, age){
            console.log(`${name}'s age is ${age}.`);
        }
        printInfo("Abdul", 20);
        // write a Function to print average of 3 numbers
        function average(a, b, c){
            console.log("Average is", (a+b+c)/3);
        }
        average(3, 4, 6);
        // write a function to print the multiplication table of a number
        function printtable(n){
            for(let i=0; i<= n*10; i=i+n){
            console.log(i);
            }
        }
        printtable(18);
