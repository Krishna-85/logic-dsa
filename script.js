//write a program that prompts the user to input the
//following details:

//Name: A simple string for the user's name.:
//Age: An integer for the user's age.
//Favorite Color: A string for the user's favorite color.
//City: A string for the city where the user lives.

// let name = prompt("Enter your name");
// let age = prompt("Enter your age");
// let Favcolor = prompt("Enter your fav color");
// let city = prompt("Enter your city");

// console.log(`My name is ${name}, I am ${age} years old. My favorite color is ${Favcolor} and I live in ${city}.`);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//rite a program that takes minutes as input, and
//display the total number of hours a minutes .
//Enter the number of minutes : 150
//Sample Input
//Total hours: 2 hours and 30 minutes

// let  n = Number(prompt("Enter Minutes"));
// let hours = Math.floor(n / 60);
// let minutes = n % 60;
// console.log(`${n} minutes is equal to ${hours} hours.
//  and ${minutes} minutes.`);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//reate a program that takes a student's score as
//input and assigns a letter grade (A, B, C, D, or F)
//based on a grading scale.
//Enter the score : 90
//Sample Input A

//  let score = Number(prompt("Enter your score"));

//  if(score>=90 && score<100){
//     console.log("A");

//  }else if(score>=80  && score<90){
//     console.log("B");
//  }else if(score>=70 && score<80){
//     console.log("C");
//     }else if(score>=60 && score<70){
//         console.log("D");
//     }else if(score>=50 && score<60){
//         console.log("F");
//     } else {
//         console.log("Invalid Score");
//     }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Make a Calculator. Take 2 numbers (a & b) from the
// user and an operation as follows :
// Enter first number : 12

// Enter second number : 8

// Enter an operation: +
// Sample Input
// 20
// Sample Output
// + (Addition) a + b
// -(Subtraction) a – b
// * (Multiplication) a * b
//  / (Division) a / b
// % (Modulo or remainder) a % b

// Taking user inputs
// const a = parseFloat(prompt("Enter the first number:"));
// const b = parseFloat(prompt("Enter the second number:"));
// const operation = prompt("Enter an operation (+, -, *, /, %):");

// // Performing the operation
// let result;

// if (operation === "+") {
//     result = a + b;
//     alert(`+ (Addition): ${a} + ${b} = ${result}`);
// } else if (operation === "-") {
//     result = a - b;
//     alert(`- (Subtraction): ${a} - ${b} = ${result}`);
// } else if (operation === "*") {
//     result = a * b;
//     alert(`* (Multiplication): ${a} * ${b} = ${result}`);
// } else if (operation === "/") {
//     if (b !== 0) {
//         result = a / b;
//         alert(`/ (Division): ${a} / ${b} = ${result}`);
//     } else {
//         alert("Error: Division by zero is not allowed.");
//     }
// } else if (operation === "%") {
//     result = a % b;
//     alert(`% (Modulo): ${a} % ${b} = ${result}`);
// } else {
//     alert("Invalid operation. Please enter one of +, -, *, /, %.");
// }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  let arr = [10,2,30,4,5,60,7,8,9,10];
//  let isSorted = true
//  for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {
//         isSorted = false;
//         break;
//     }
//  }
//  if(isSorted){

//      console.log("Array is sorted");
//     }else console.log("Array is not sorted");

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let arr = [10,20,30,40,50,60];

// let temp = arr[0];

// for(let i = 0; i<arr.length; i++){
//     arr[i] = arr[i+1];
// }
// arr[arr.length-1] = temp;
// console.log(arr);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//let  target = Number(prompt("enter a number"));

//linear number

//  let arr = [10,20,30,40,50,60,70,80,90,100];
// let target = Number(prompt("enter value from array"))
// let ans = -1;
//  for(let n =1; n<arr.length; n++){
// if(arr[n] === target){

//      ans = n
// }
// }
//  if(ans !==-1){

//      console.log(`Your Value At index ${ans}`);
// }else{
//         console.log("Value not found")
//  }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Fibonacci series

// let n = Number(prompt("Enter a number"))

// let a = 0;
// let b = 1;
// console.log(a);
// console.log(b);
// let c;
// for(let i = 3; i<=n; i++){
//     c = a+b
//     console.log(c);
//     a = b;
//     b = c

// }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//MINIMUM VALUE
// let arr = [10,50,80,10,50,90,256,2];
// let min = arr[0]
// for(let i=0; i<arr.length; i++){
//     if(arr[i] < min){
//         min = arr[i]
//     }
// }
// console.log(min);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Fnd the array is sorted or not

// let arr = [108, 20, 30, 40, 50, 69990, 80];
// let isSorted = true;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > arr[i + 1]) {
//     console.log("array is not sorted");
//     isSorted = false;
//     break
//   }
// }
// if (isSorted === true) {
//   console.log("array is sorted");
// }


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//Toggle characters.

 

// let str = "vAiBhAv"
// let result = ""

// for(let i=0; i<str.length; i++){
//     if(str[i]===str[i].toUpperCase()){
//         result += str[i].toLowerCase()
//     }else{

//         result += str[i].toUpperCase()
//     }  
    
// }
//  console.log(result);


//2nd Way

// try with 2nd method image in gallery




//Q-56
// let words = ["pay", "attire", "practice", "attend"]

// let pref = "at"
// let Count = 0;

//  for(let i=0; i<words.length; i++){
//     if(words[i].startsWith(pref)) Count++
//  }
//  console.log(Count);


//Q-57
// let s  = "hello bhai kaise ho";
// let arr = s.split(" ")
//hello
//arr[0] = hello 
//arr[0].charAt(0) = H + ello

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i].charAt(0).toUpperCase()+arr[i].substring(1));
// }

//Q-51 

//Homework




 
