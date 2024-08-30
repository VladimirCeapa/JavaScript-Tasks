
function calculateInterest(principal, rate, years) {
    let cashAccount = principal;
    let total = 0;
    for (let i = 0; i < years; i++) {
        total += ((total + principal) * (rate / 100))
    }
    return total + cashAccount;
}

function calculateMonthlyContribution(contribution, rate, years) {
    let account;
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