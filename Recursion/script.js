//LIFO :- Last in first out.

 

//+++++++++++++++++ Print 5 To 1 +++++++++++++++++++++++++++++++++++++++++++++++

// let n = Number(prompt("Enter a number"))
// function printHello(n){
//     if(n==0) return
//     console.log(n)
//     printHello(n-1)
    
// }
// printHello(n)

// Print 1 To 5 Count,

//+++++++++++++++++++++++++ Print The Sum +++++++++++++++++++++++++++++++++++++++++++++++
// jo kuch bhi hold par rehta hai wo tab chlta hai jab function pop/backtrack hone par, 
// this is called backTracking.

// let n = Number(prompt("Enter a number"))
// function sum(n){
//     if(n==1) return 1
//        return n + sum(n-1)
//     }
//     console.log("sum " + sum(n))
    
//+++++++++++++++++++++++ Factorial +++++++++++++++++++++++++++++++++++++++++++++++++

// let n = Number(prompt("Enter a number"))
// function fact(n){
//     if(n==1) return 1
//        return n * fact(n-1)
//     }
//     console.log("fact " + fact(n))

    

//+++++++++++++++++++++++++++ Sum of Digit +++++++++++++++++++++++++++++++++++++++++++++

// let n = Number(prompt("Enter a number"))
// function sumofDig(n){
//     if(n==0) return n
//        return (n%10) + sumofDig(Math.floor(n/10))
//     }
//   console.log(sumofDig(n))

//+++++++++++++++++++++++++++ Sum of Digit +++++++++++++++++++++++++++++++++++++++++++++

// let n = Number(prompt("Enter a number"))
// let rev = 0
// function sumofDig(n, rev){
//     if(n==0) return n
//        return (rev*10) + sumofDig(Math.floor(n/10), rev)
//     }
//   console.log(sumofDig(n, rev))

//+++++++++++++++++++++++++++ Reverse of Digit +++++++++++++++++++++++++++++++++++++++++++++

// let n = Number(prompt("Enter a number"))
// let rev = 0
// function sumofDig(n, rev){
//     if(n==0) return rev
//     let rem = n%10
//         rev =  (rev*10) + rem
//        return sumofDig(Math.floor(n/10), rev)
//     }
//   console.log(sumofDig(n, rev))

//+++++++++++++++++++++++++++ Recursion calls +++++++++++++++++++++++++++++++++++++++++++++

// let n = Number(prompt("Enter a number"))
// function fibo(n){
//     if(n==0 || n==1 ) return n
//     return fibo(n-1) + fibo(n-2)
 
// }
// console.log(fibo(n))

//+++++++++++++++++++++++++++ Print Fibonacci sequence +++++++++++++++++++++++++++++++++++++++++++++

// let n = Number(prompt("Enter a number"))

// let first = 0, second =1
// console.log(first)
// console.log(second)
// for(let i=1; i<=n-2; i++){
//     let third = first + second
//     console.log(third)
//     first = second
//     second = third
// }

//+++++++++++++++++++++++++++ GCD with recurision +++++++++++++++++++++++++++++++++++++++++++++

// let a = Number(prompt("enter a number"))
// let b = Number(prompt("enter a number"))
// let c = Math.min(a,b)
// function gcd(a,b,c){
//     if(c==1) return 1
//     if(a%c==0 && b%c==0){
//         return c
//     }
//     return gcd(a,b,c-1)
// }
// console.log(gcd(a,b,c))


//+++++++++++++++++++++++++++ GCD with recurision, second method +++++++++++++++++++++++++++++++++++++++++++++

// let a = Number(prompt("enter a number"))
// let b = Number(prompt("enter a number"))

// console.log(gcd(a,b))
// function gcd(a,b){
//     if(a==b) return a
//     if(a>b) return gcd(a-b ,b)
//         return gcd(a, b-a)
// }

//=====================================================================================


//  let n = Number(prompt("enter a number"))

//  let factor = (n,i)=>{
//     if(i>n/2){
//         console.log(n)
//         return 
//     }
//     if(n%i ==0){
//         console.log(i)
//     }
//     factor(n, i+1)
//  }
// factor(n,1)

//==================================================\\

// let n = Number(prompt("enter a number"))
// let arr = []
// for(let i=0; i<=Math.floor(Math.sqrt(n)); i++){
//     if(n%i==0){
//         if(i==n/i){
//             arr.push(i)
//         }else{
//             arr.push(i)

//             arr.push(n/i)

//         }
//     }
// }
// arr.sort((a,b)=> (a-b))
// console.log(arr)

//Solved but consuming extra space.
//==================================================\\

//factor in loop with sorted array.

// let n = Number(prompt("enter a number"))

// let i;

// for(i=1; i*i<n; i++){
//     if(n%i==0) console.log(i)
// }

// if((i-n/i)==1) i--

// for(;i>=1; i--){
//     if(n%i==0) console.log(n/i)
// }

//=========================== Prime Number ======================================

//  let n = Number(prompt("enter a number"))
// let count = 0
// if(n<=1) console.log("not prime")
// for(let i =1; i<=n/2; i++){
//     if(n%i==0) count++
// }
// if(count ==1) console.log("prime Number")
//     else console.log("not prime number")

// agar koi number 2 se leke apne square root tak devide nhi ho paya to iska mtlb wo aage bhi kabhi devide nhi ho payega.

//koii sa bhi odd number even number se nhi jata hai.
//================================= Prime(odd) Number Second Method ======================================

let n = Number(prompt("enter a number"))
isPrime()
if(isPrime(n)) console.log("prime Number")
      else console.log("not prime number")
function isPrime(n){
  if(n<=1) return false
  if(n==2) return true
  if(n%2==0) return false
  for(let i=3; i<=Math.floor(Math.sqrt(n)); i+=2){
    if(n%i==0) return false
  }
  return true
}