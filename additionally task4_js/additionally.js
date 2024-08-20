//1
/*Create a function called fahrenheitToCelsius 
that receives a temperature in degrees Fahrenheit 
and returns the equivalent in degrees Celsius.*/

let fahrenheit = 333;

function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    console.log(`The temperature in Celsius is ${celsius.toFixed(2)}`);
    return celsius;
}

fahrenheitToCelsius(fahrenheit);

//2
/*Create a function called calculateCircleArea 
that receives the radius of a circle and returns
its area.*/

let radius = 7;
function calculateCircleArea(radius) {
    let aria = Math.PI * (radius * radius)
    console.log('area of a circle' + aria)
    return aria;
}
calculateCircleArea(radius);

//Task 3: Checking the parity of a number
/*Create a function called isEven that receives
an integer and returns true if the number 
is even and false if it is odd.*/

let number = 111;

function isEven(number) {
    return (number % 2 == 0) ? true : false;
}
console.log(isEven(number));

//Task 4: Convert minutes to hours and timer.
/*Create a function called convertMinutes that receives a number of minutes. 
Inside it, you define two functions: one to extract the number of hours (extractHours) 
and one to extract the remaining minutes (extractMinutes). 
The main function will call these two functions and display the results*/



function convertMinutes(minutes) {

    function extractHours(minutes) {
        let hours = minutes / 60;
        return Math.trunc(hours);
    }
    function extractMinutes(minutes) {
        let min = minutes - (hours * 60);
        return min;
    }
    let hours = extractHours(minutes);
    let min = extractMinutes(minutes);
    console.log(`${minutes} minutes are equivalent to ${hours} hours and ${min} minutes.`);

}

convertMinutes(598);

//Task 5: Calculation and display of body mass index (BMI)
/*The task is to create a function that calculates the body mass 
index (BMI) for a person based on their height and weight. 
The BMI is rated into a category (underweight, normal, overweight, obese) 
and a corresponding message is displayed. 
The principle for categories: underweight below 18.5 (BMI), 
normal (18.5-25), overweight (25-30) greater than 30 - obese.*/

function calculationBMI(weight, height) {
    let bmi = weight / (Math.pow(height, 2))
    if (bmi < 18.5) {
        console.log('BMI it underweight');
    } else if (bmi > 18.5 && bmi < 25) {
        console.log('BMI it is normal');
    } else if (bmi >= 25 && bmi <= 30) {
        console.log('BMI it overweight');
    } else {
        console.log('BMI it obese');
    }

}
calculationBMI(94, 1.94);

//Task 6: Currency exchange rate calculator
/*Create a calculator that converts 
different currencies (USD, EUR, RON, GBP) to MDL*/

function getExchangeRate(fromCurrency) {
    fromCurrency=fromCurrency.toUpperCase();
    if(fromCurrency==='USD'){
        return 18.5;
    }else if(fromCurrency==='EUR'){
        return 19.5;
    }else if(fromCurrency==='RON'){
        return 4.8;
    }else if(fromCurrency==='GBP'){
        return 20.6;
    }else{
        return;
    }
}
console.log(getExchangeRate('UsD'));

function calculAmount(initialAmount,rate){
    return initialAmount*rate;
}

function convertCurrency(amount, fromCurrency) {

let rate=getExchangeRate(fromCurrency);
if(rate==null){
    console.log('Currency is not supported.')
    return;
}
let result=calculAmount(amount,rate)
console.log(`${amount} ${fromCurrency} is equivalent to ${result} MDL`);
}
convertCurrency(100, 'USD')
convertCurrency(100, 'EUR')
convertCurrency(100, 'RON')
convertCurrency(100, 'GBP')
convertCurrency(100, 'ABC')
