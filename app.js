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
   // Using Return in functions
   function sum(a, b){
          sum = a + b;
          return sum;
   }
   s = sum(3, 5);
   console.log(s);
   // create a function that returns the sum of numbers from 1 to n
    function getSum(n){
        let sum = 0;
        for(let i=0; i<= n; i++){
            sum += i;
        }
        return sum;
    }
    let g = getSum(101);
    console.log(g);
    // create a function that return the concatenation of all the strings in an aaray
    let st = ["hi", " my", " name", " is", " Abdul", "Rahman"];
    function concat(str){
        let result= "" ;
        for(let i=0; i<str.length; i++){
            result += str[i];
        }

        return result;
    }
    let u = concat(st);
    console.log(u);
    // learning scopes in JS
    function outerFunc(){

        let x = 5;       
        function innerFunc(){
            console.log(x);
        }
        innerFunc();
    }
    outerFunc();
    // function expression
    const sm = function(a, b){
        return a+b;
    }
    console.log(sm(2,6));
    // Higher order functions
    function multipleGreet(func, count){
        for(let i=1; i<= count; i++){
            func();
        }
    }
    let greet = function(){
        console.log("hello");
    }
    multipleGreet(greet, 10);
    // Higher order functions return a function
    function oddEvenFactory(request){
        if(request == "odd"){
            odd = function(n){
                console.log(!(n%2 == 0));
            }
        }else if(request == "even"){
            even = function(n){
                console.log(n%2 == 0);
            }
        }else{
                console.log("wrong request");
            }
        }
        // Methods
        // const calculator ={
        //     add: function(a, b){
        //         return a+b;
        //     },
        //     sub: function(a, b){
        //         return a-b;
        //     },
        //     mul: function(a, b){
        //         return a*b;
        //     },
        //     div: function(a, b){
        //         return a/b;
        //     },
        // }
        // calculator shorthand
        const calculator ={
            add(a, b){
                return a+b;
            },
            sub(a, b){
                return a-b;
            },
            mul(a, b){
                return a*b;
            },
            div(a, b){
                return a/b;
            },
        }
        // Using this keyword
        const data ={
            name: "Abdul",
            age: 20,
            eng: 93,
            math: 97,
            phy: 95,
            getAvg(){
                let avg = (this.eng + this.math + this.phy) /3;
                console.log(`${this.name} got an average marks of ${avg}`);
            }
        }
        console.log(data.getAvg());
        // try and catch statement
        let l = "YES";
        try{
            console.log(l);
        }catch{
            console.log("Variable not defined");
        }
        // Arrow function
        const summ = (a,  b) => {
            console.log(a+b);
        };
        console.log(summ(2, 8));

        const cube = (n) => {
            return n*n*n;
        };
        console.log(cube(3));
        // implicit return
        const mul = (a, b) => (
            a*b
        );
        console.log(mul(9, 5));
        // Set timeout function
        //
        // set interval
    //   let id =  setInterval( () =>{
    //         console.log("Apna College");
    //     }, 2000);
    //     console.log(id);
    // this with arrow function
    const stu ={
        name: "abdul",
        marks: 95,
        prop: this, // global scope
        getName: function(){
            console.log(this); // calling object ka this hai, get/name ko student object call kar raha to uska scope use hoga
            return this.name;
        },
        getMarks: ()=> {
            console.log(this); // calling object ka this hai, get marks ko student object call kar raha aur uska parent global scope hai to wahi use hoga
            return this.name;
        },
        getInfo1: function(){
            setTimeout( ()=>{
                console.log(this); // iss this ko call lagayi function() ne jiska parent student hai to uska hi scope use hoga
            }, 2000);
        },
        getInfo2: function(){
            setTimeout( function(){
                console.log(this); // isko call settimeout laga raha jiska scope global scope hai to wahi use hoga
            }, 2000);
        }
    };
    // Write an arrow funstion to print the square of a number "n"
    let square = (n) =>{
        return n*n;
    };
    console.log(square(6));
    // write a function that prints "Hello world!" 5 times at an interval of 2s each
    // let id1 = 
    // setInterval(()=>{
    //     console.log("Hello world");
    // }, 2000);
    // console.log(id1);
    // setTimeout(()=>{
    //     clearInterval(id1);
    // }, 10000);
    // Array methods
    // forEach method
    let arr = [1, 2, 3, 4, 5];
    let print = function(el){
        console.log(el);
    }
    arr.forEach(print);

    let array = [{
        name: "Abdul",
        marks: 93
    },
{
    name: "Yash",
    marks: 88
},
{
    name: "Veeru",
    marks: 91
}]
array.forEach((student) =>{
        console.log(student.name);
});
// mapping array
let numbers = [1, 2, 3, 4, 5, 6];
let double = numbers.map((el)=>{
    return el*2;
});
console.log(double);
// filter
//let numbers = [1, 2, 3, 4, 5, 6];
let ans = numbers.filter((el)=>{
    return el%2 == 0; // even->true, odd -> false
});
console.log(ans);
// Every
let m = numbers.every((el)=>(el%2==0));
// Some
let n = numbers.some((el)=>(el%2 == 0));
// Reduce function
let finalValue = numbers.reduce((res,el)=>{
    return res+el;
});
console.log(finalValue);
// finding maximum in an array using reduce
let nimbu = [2, 3, 4, 5, 3, 4, 7, 8, 1, 2];
// let result = nimbu.reduce((max, el)=>{
//     if(max<el){
//         return el;
//     }else{
//         return max;
//     }
// });
// console.log(result);
// finding maximum in an array using reduce
let result = nimbu.reduce((min, el)=>{
    if(min>el){
        return el;
    }else{
        return min;
    }
});
console.log(result);
// Default parameter
function defaulte(a, b=5){
    return a+b;
};
// spread
console.log(..."apnacollege");
// spread with Array literals
let digit = [1, 2, 3, 4, 5];
let newdigit = [...digit];
console.log(newdigit);
let char = [..."hello"];
console.log(char);
let odd =[1,3,5,7];
let even=[2,4,6,8];
let combine = [...odd, ...even];
console.log(combine);
// spread with object literals
const dataa = {
        email: "ironman123@gmail.com",
        password: "abcd"
};
let datacopy = {...dataa, id:123, country: "INDIA"};
console.log(datacopy);
// Rest
function suum(...args){
    return args.reduce((sum, el)=>(sum + el));
}
console.log(suum(1,2,3,4));
// Destructuring
let names = ["tony", "steve", "brooks", "peter"];
let [winner, runnerup, ...others] = names;
console.log(winner, runnerup);
// Destructuring objects
// let obj1 = {
//     name:"karan",
//     age:15,
//     class:9,
//     subject:["hindi", "english", "maths", "science", "sst"],
//     username:"karan@123",
//     password:"abcde"
// };
// let {username: user1, password: secret, city: place="mumbai"} = obj1;
// console.log(user1, secret, place);

// CallBack nesting => CallBack hell 
// document.addEventListener("DOMContentLoaded", function(){
// let h1 = document.querySelector("h1");
// function colorChange(color, delay, changeNextcolor){
//     setTimeout(()=>{
//       h1.style.color = color;
//       changeNextcolor();
//     }, delay);
// }
// colorChange("red", 1000, () =>{
//     colorChange("orange", 1000, () =>{
//         colorChange("green", 1000, () =>{
//             colorChange("yellow", 1000, () =>{
//                 colorChange("blue", 1000)
//             });
//         });
//     });
// });
// });
// Promises
// function dbSave(data, success, failure){
//     let internetSpeed = Math.floor(Math.random()*10) + 1 ;
//     if(internetSpeed > 5){
//         success();
//     }else{
//         failure();
//     }
// }
// dbSave("Apna College", ()=>{
//     console.log("Data saved");
// }, ()=>{
//     console.log("Data not saved, internet speed is slow");
//     }
// );

// };
// dbSave("apna college")
// .then(()=>{
//     console.log("Promise was resolved");
// })
// .catch(()=>{
//     console("Promise was rejected");
// });
// document.addEventListener("DOMContentLoaded", function(){
//     let h1 = document.querySelector("h1");
//     function colorChange(color, delay){
//         return new Promise((resolved, rejected)=>{
//         setTimeout(()=>{
//           h1.style.color = color;
//           resolved();
//         }, delay);
//     });
// }
//     colorChange("red", 1000)
//     .then(()=>{
//         console.log("red was completed");
//         return colorChange("blue", 1000);
//     })
//     .then(()=>{
//         console.log("blue was completed");
//        return colorChange("yellow", 1000);
//     })
//     .then(()=>{
//         console.log("yellow was completed");
//        return colorChange("pink", 1000);
//     })
//     .then(()=>{
//         console.log("pink was completed");
//        return colorChange("purple", 1000);
//     })
//     .then(()=>{
//         console.log("purple was completed")
//     })
// });