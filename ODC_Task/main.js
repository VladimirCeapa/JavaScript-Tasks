/*Write a function with the plural name that:
It accepts 2 arguments: a noun and a number.
Return a sentence containing the number and the plural noun 
(if applicable), eg: "I have 5 cats" or "I have 1 dog".
Call the function with the data: "6 pig", "0 hamster", "1 parrot".
Bonus: we also include the exceptions "sheep" ("I have 1 sheep", "I have 4 sheep") 
and "geese" ("I have 1 goose", "I have 9 geese") */


function pluralName(noun,number){
    if(number>1&& noun!='sheep'&& noun!='goose'){
    return 'i have'+" "+number+" " + noun+'s';
    }else if(number>1&&noun=='goose'){
        return 'i have'+" "+number+" "+'geese';
    }
    else{
        return 'i have'+" "+number+" " + noun ;
    }
}

console.log(pluralName('dog',1));
console.log(pluralName('pig',6));
console.log(pluralName('hamster',0));
console.log(pluralName('parrot',1));
console.log(pluralName('sheep',1));
console.log(pluralName('goose',9));

/*Create a program that has 3 variables defined: name, birth year and isF (boolean).
Create a function that calculates the person's age.
Create a function that accepts a boolean value isF and returns 
the retirement age (use ternaryOperator - 67 men, 64 women);
Create a function that finds out if the person is already retired, 
in how many years they will retire, and if they are not minors.
Display the name and the retirement message in the console, for example: 
"Vasile has 26 years left until retirement". Call only one function with the data.
Dates: Sergiu, 1979. Anastasia, 1963. Andreea, 2010. */


function calculatAge(year){
    return 2024-year;
}
function  accepts(isF){
    return (isF)?64:67;
}
function alreadyRetired(name,birthYear,isF){
    let years=calculatAge(birthYear);
      if(years<18){
        console.log('Is a minor');
        return;
    }
    let yearsRetired=accepts(isF)-years;
  
   
    if(yearsRetired>0){
console.log(`${name} has ${yearsRetired} years left until retirement`)
    }else{
        console.log(`${name} has already retired`)
    }

}
alreadyRetired('Sergiu',1979,false);
alreadyRetired('Anastasia',1963,true);
alreadyRetired('Andreea',2010,true);