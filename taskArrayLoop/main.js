/**Let's improve Ana's tip calculator even more, this time using cycles!
1. Create an array "invoices" containing all 10 test invoice values
2. Create 2 empty arrays for "tips" and "totals"
3. Use the "calcTip" function we wrote before (no need to repeat) 
to calculate the tips and total values ​​(bill + tip) for each value in the bill array. Use the for loop to perform the 10 calculations!
TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
TIP: Call calcTip in the loop and use the push method to add values ​
 to the tips and totals arrays.
4. Write a "calcAverage" function that takes an array named "arr" as an argument. 
This function calculates the aceived array. Call the function with the "totals" array. */


let bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips = [],
    totals = [];

function calcTip(bill) {
    let tips = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
    return tips;
}
for (let i = 0; i < bill.length; i++) {
    tips[i] = calcTip(bill[i])
    totals[i] = bill[i] + tips[i];
}

function calcAverage(arr) {

    return arr.reduce((sun, el) => sun + el, 0)
}
calcAverage(totals);



// ----------- OPTIONAL: Calculation of savings and compound interest -----
/**calculateInterest(principal, rate, years) function: This function receives a principal amount, an interest rate, and a number of years. 
 * It will calculate the amount accumulated in the account following the application of annual compound interest. 
 * Use a "for" loop to update the amount each year.
calculateMonthlyContribution(contribution, rate, years) function: This function receives a monthly contribution, 
an interest rate, and a number of years. It will calculate the amount accumulated in the account if 
a monthly contribution was made, applying compound interest each month. Use a "for" loop to update the amount each month.
PrintSavings(name, principal, rate, years, contribution) function: This function calls the other two 
functions and displays in the console the total amount of money saved in the account after a certain 
number of years, taking into account the initial amount, annual interest and monthly contributions.
The printSavings function should display a message like: "John, the total amount you will 
have in your account after x years is [Amount]."
Example of calling the printSavings function: printSavings('Ioana', 1000, 5, 10, 50) */


function calculateInterest(principal, rate, years) {
    let cashAccount = principal;
    let total = 0;
    for (let i = 0; i < years; i++) {
        total += ((total + principal) * (rate / 100))
    }
    return total + cashAccount;
}

function calculateMonthlyContribution(contribution, rate, years) {
    let account = 0;
    for (let i = 1; i <= years * 12; i++) {
        account += contribution
        account += account * ((rate / 100) / 12);
    }
    return account;
}

function printSavings(name, principal, rate, years, contribution) {
    let withoutReplenishment = calculateInterest(principal, rate, years);
    let replenishment = calculateMonthlyContribution(contribution, rate, years);
    console.log(`${name}, the amount accumulated in the account following the application of annual compound interest,after ${years} years is  : ${withoutReplenishment.toFixed(2)} lei.`);
    console.log(`${name}, The amount of accumulated funds with monthly replenishment of the sum ${contribution}lei over ${years} the years will be : ${replenishment.toFixed(2)} lei.`);
}
printSavings('Ioana', 1000, 5, 10, 50);