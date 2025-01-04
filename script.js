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

//Q-58 Count Frequency 

//accept a string and print the frequency of each character present in the string.

// let s = prompt("enter a string")
// let arr = new Array(26).fill(0)

// for(let i=0; i<s.length; i++){
//     let ascii = s.charCodeAt(i)
//     arr[ascii-97] = arr [ascii-97]+1
// }
// for(let i=0; i<s.length; i++){
//   if(arr[i]>0){
//     console.log(s.fromCharCode(i+97)+"->"+arr[i]);
    
//   }
    
    
// }
//lexographic value comparision of Two values.

//Q-60 Sort the words of sentenc.


//  function abc (){
//     console.log(arguments);
//     console.log(this)
    
//  }
//  abc(1,2,3,4,)      

// let str  = "vaibhav 13331 VAIBHAV"
// console.log(str)

// let vow = 0;
// let cons =0;
// let sps = 0;
// let num = 0;

// for(let i=0; i<str.length-1; i++){
//     if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){
//         vow++
//     }else if(str[i]== " "){
//         sps++
//     }else if(str[i] >=0 && str[i]<=9){
//         num++
//     }else{
//         cons++
//     }
// }

// console.log(`vowels ${vow} cons ${cons} space ${sps} numbers ${num}`);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let str = VaIBHav 

// let result = "";

// for(let i=0; i<str.length; i++){
//    let char = str.charCodeAt(i)
//    if(ascii>=65 && ascii<=96){
//     ans = ans + String.fromCharCode
//    }
// }

//Find the largest value from array.

// let arr = [50,10,21,85,79];
// console.log(arr)

// let max = arr[0];

// for(let i=0; i<arr.length; i++){
//    if(arr[i]>max){
//       max = arr[i]
//    }
// }
// console.log(max);

//Array is sorted or not.

// let arr = [10,20,300,40,50,60]
// console.log(arr)

// let isSorted = true;

// for(let i=0; i<arr.length; i++){
//    if(arr[i]>arr[i + 1]){
//       isSorted = false;
//       break;
//    }
// }
// if(isSorted)
//    console.log("array is sorted")
// else console.log("array is not sorted")

//Left Rotation.

//  let arr = [1,2,3,4,5];

//  let n = arr.length
//  let temp = arr[0];
//  for(let i=0; i<n-1; i++){
//    arr[i] = arr[i+1];
//  }
//  arr[n-1] = temp 
//  console.log(arr);
 //

//2D Array.

// let arr = [
//     [1,2,3],
//     [5,6,7],
//     [7,8,9],
//     [10,11,12]
// ];
// for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr[0].length; j++){
//         console.log(arr[i][j]);
        
//     }
    
// }

//Dynamic 2D Array.
// let rows = 3, cols = 4
// let arr =  Array.from({length:rows}, ()=> Array(cols) )
// for(let i=0; i<arr.length; i++){
//         for(let j=0; j<arr[0].length; j++){
//        arr[i][j] = Number(prompt("enter a number"))
            
//         }
        
//     }
//     console.log(arr);

//Dynamic 3D arry rows, col.
    
// let rows = Number(prompt("enter Rows"))
// let arr = new Array(rows)

// for(let i=0; i<arr.length; i++){
//     let col = Number(prompt("Enter col"))
//     arr[i] = new Array(col)
// }
//  for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr[0].length; j++){
//         arr[i][j] = Number(prompt("enter a number"))
//     }
//  }
// console.log(arr);

//  let arr = [[1,2,3],[4,5,6],[7,8,9]]

// let leftSum = 0 , rig0htSum = 0

// for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr[i].length; j++){
//         if(i==j) leftSum += 
//     }
// }
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Find the Frequency of Elements.

// let arr = [5,8,1,2,5,6,8,8,6,6,3,4,4]

// for(let i=0; i<arr.length; i++){
//     let count = 1;
//     if(arr[i]!= -1){
//         for(let j=i+1; j<arr.length; j++ ){
//             if(arr[i] == arr[j]){
//                 count++
//                 arr[j]= -1
//             }
//         }
                
//         console.log(arr[i] + " element found " + count + " times");
//     }
// }
  
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Find the sub array.

let arr = [1,2,1,2,7,5,12]
let count = 0;
let sum = 12
let maxlength = 0;
 
for(let i=0; i<arr.length; i++){
    let loopsum =0;
    let len = 0;
    for(let j =i; j<arr.length; j++){
        loopsum+=arr[j]
        len++
        if(loopsum==sum && len>maxlength){
    maxlength = len
}
    }
    
    
}
console.log(maxlength);


    

