/*Create a function that tells us if a year is a leap year or not.
- If a year is divisible by 4 and not divisible by 100, it is a leap year.
- If a year is divisible by 400, it is a leap year (this is the exception for centuries).*/


function checkLeapYear(year) {
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}
let year = 2020;
checkLeapYear(year);//Yes

year = 1998;
checkLeapYear(year);//No

/*Back to the two gymnastics teams, Dolphins and Koalas! There is a new gymnastics
 discipline that works differently. Each team competes 3 times,
  and then the average of the 3 scores is calculated (so an average score per team).
A team wins ONLY if they have at least DOUBLE the average score of the other team. 
Otherwise, neither team wins!

1. Create a "calcAverage" function to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function "checkWinner" that takes as parameters the average score of each team
 ("avgDolhins" and "avgKoalas"), then records the winner in the console, along with the victory points, according to the above rule. Example: "Koalas win (30 vs. 13)".
4. Use the "checkWinner" function to determine the winner for both DATE 1 and DATE 2.
5. Ignore the draws this time.
TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
DATA TEST 2: Dolphins score 85, 54 and 41. Koala score 23, 34 and 27*/


function calcAverage(score1, score2, score3) {
    rezult = (score1 + score2 + score3) / 3
    return rezult;
}

let avgDolhins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);


console.log(avgDolhins, avgKoalas)

function checkWinner(avgD, avgK) {
    if (avgD / 2 > avgK) {
        console.log(`Dolhins winners (${avgD} vs ${avgK})`);
    } else if (avgD / 2 > avgK) {
        console.log(`Koalas winners  (${avgK} vs ${avgD})`);
    } else {
        console.log('There is no winner')
    }

}
checkWinner(avgDolhins, avgKoalas);//no winner

avgDolhins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);

checkWinner(avgDolhins, avgKoalas);//Dolhins winners (60 vs 28)
