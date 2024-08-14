//task_1 
/*check variable temperature...
if it is less than "0"
output "freezing"
if it is greater than or equal to "0" and less than or equal to "10"
output "cold"
if it is greater than or equal to "11" and less than or equal to "25" output "moderate"
if it is greater than "25"
output "warm"*/

let temperature = 27;
if (temperature < 0) { console.log("inghet") }
else if ((temperature >= 0 && temperature <= 10)) { console.log("frig"); }
else if (temperature >= 11 && temperature <= 25) { console.log("moderat"); }
else { console.log("cald"); }


//task_2
/*check the numeric variable day... 
and output the specified day according to the numbering of the days of the week...."
example day = 2; Output the day of the week "Tuesday" to the console.
if the day does not correspond to a number from 1-7 inclusive
output "error"*/

let day = 8;
if (day == 1) { }
else if (day == 2) { console.log("Marti") }
else if (day == 3) { console.log("Miercuri") }
else if (day == 4) { console.log("Joi") }
else if (day == 5) { console.log("Vineri") }
else if (day == 6) { console.log("Sambata") }
else if (day == 7) { console.log("Duminica") }
else { console.log("Error, the entered number does not match the days of the week, enter from 1 to 7 inclusive") }

//solution using switch

/*switch(day) {
  case 1:
     console.log("Luni") 
    break;
  case 2:
     console.log("Marti")
    break;
    case 3:
     console.log("Miercuri") 
    break;
  case 4:
     console.log("Joi")
    break;
    case 5:
      console.log("Vineri") 
    break;
  case 6:
     console.log("Sambata")
    break;
      case 7:
     console.log("Duminica")
    break;
  default:
    console.log("Error, the entered number does not match the days of the week, enter from 1 to 7 inclusive")
}*/

// task_3
/*check the numeric variable "number" and output 
according to the condition if the variable is even or odd.*/


let number = 30;
if (number % 2 == 0) {
    console.log("even")
}
else { console.log("odd") }


//task_4
/*Create a variable "purchaseAmount" if it is greater than or equal to 100.
 Then we provide a discount of 10% of the total amount to the main 
 amount and also add income tax to the 
total cost in the amount of 5%. Display the total amount after discounts and taxes.*/

// a. "purchaseAmount"=100
// we provide a discount of 10% of the total amount
let purchaseAmount = 100;
const VAT = 5;
let amount = 1000;

if (purchaseAmount >= 100) { amount -= (amount * 0.1) }

amount += (amount / 100) * VAT

console.log(amount)

// b. "purchaseAmount"=10
// we do not provide a 10% discount on the total amount

purchaseAmount = 10;
amount = 1000

if (purchaseAmount >= 100) { amount -= (amount * 0.1) }
amount += (amount / 100) * VAT

console.log(amount)

//task_5 
// Password check on conditions


let password = "qwert12345";  //Password

if (password.length >= 12 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password)) {
    console.log("Very secure password");
} else if (password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password)) {
    console.log("Secure password");
} else if (password.length >= 6 && /^[a-zA-Z]+$/.test(password)) {
    console.log("Weak password");
} else {
    console.log("Unsafe password");
}


//task_6
//write a javascript program that checks if the number is prime.

let num=4;

function isPrime(number){
  for(let i=2;i<number;i++){
    if(number%i==0){
return false;
    }
  }
  return number>1;
}

console.log('it is that the number is prime - '+ isPrime(num))

//task_7
/* check if these three numbers are set as different
 values ​​of the sides, they can form a triangle! 
 And an additional condition check if this triangle is a "Rectangle"
  and meets the requirements of the "Pythagorean" theorem*/

let a = 5;
let b = 4;
let c = 5;
if (a + b > c && a + c > b && b + c > a) {
    console.log(" can form a triangle.");
} else {
    console.log("it does not form a triangle.");
}

//check if the resulting triangle is a rectangle
//The formula of the Pythagorean Theorem looks like this:
// a2 + b2 = c2,

if (a**2+b**2==c**2){
  console.log(" right triangle.");
}else{
  console.log("it does not right triangle.");
}
   