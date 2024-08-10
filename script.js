//task Vadim and Alex try to compare their BMI (body mass index),
// which is calculated using the formula:
// BMI = mass / height ** 2. (mass in kg and height in meters).

// option 1 
// Vadim weighs 78 kg and is 1.69 m tall. Alex weighs 92 kg and is 1.95 m tall.

let vadimWeight = 78;
let vadimHeight = 1.69;

let vadimBMI = vadimWeight / (vadimHeight ** 2)


let alexWeight = 92;
let alexHeight = 1.95;

let alexBMI = alexWeight / (alexWeight ** 2)

let markHigherBMI = Boolean;


markHigherBMI = alexBMI > vadimBMI;
console.log(alexBMI + ' '+vadimBMI);
console.log('Vadim weighs 78 kg and is 1.69 m tall. Alex weighs 92 kg and is 1.95 m tall.');
console.log('Vadim has a higher BMI than Alex.This is ' + markHigherBMI);


// option 2 
// Vadim weighs 95 kg and is 1.88 m tall. Alex weighs 85 kg and is 1.76 m tall.
vadimWeight = 95;
vadimHeight = 1.88;

vadimBMI = vadimWeight / (vadimHeight ** 2);


alexWeight = 85;
alexHeight = 1.76;

alexBMI = alexWeight / (alexWeight ** 2);

markHigherBMI = alexBMI < vadimBMI;

console.log('Vadim weighs 95 kg and is 1.88 m tall. Alex weighs 85 kg and is 1.76 m tall..');
console.log('Vadim has a higher BMI than Alex.This is ' + markHigherBMI);