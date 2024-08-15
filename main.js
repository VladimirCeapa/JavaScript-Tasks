
/*Ana wants to build a very simple tip calculator 
for whenever she goes out to eat in a restaurant. 
In her country, it is customary to tip 15% if the 
bill is between 50 and 300. If the amount is different, t
he tip is 20%.
TEST DATA: Test for invoice values ​​275, 40 and 430
*/


let bill=275;

let tips=( bill>0 && bill<=49)? 0:(bill>=50 && bill<=300)? bill*0.15 : bill*0.2;

let forPayment=bill+tips;

console.log('for payment '+forPayment, 'tips '+tips)

bill=40;
tips=( bill>0 && bill<=49)? 0:(bill>=50 && bill<=300)? bill*0.15 : bill*0.2;
forPayment=bill+tips;
console.log('for payment '+forPayment, 'tips '+tips)

bill=430;
tips=( bill>0 && bill<=49)? 0:(bill>=50 && bill<=300)? bill*0.15 : bill*0.2;
forPayment=bill+tips;
console.log('for payment '+forPayment, 'tips '+tips)