const mark={
    firstName:'Mark',
    lastName:'Ganea',
    weighs:78,
    height:1.69,
    BMI:0,
    calcBMI:function(){
        mark.BMI=(this.weighs / this.height ** 2).toFixed(2);
    },
}
const vasile={
    firstName:'Vasile',
    lastName:'Cibotaru',
    weighs:92,
    height:1.95,
    BMI:0,
    calcBMI:function(){
       vasile.BMI=(this.weighs / this.height ** 2).toFixed(2);
    },
}
vasile.calcBMI(),mark.calcBMI();
if(mark.BMI>vasile.BMI){
    printConsol(mark,vasile);
}else{
    printConsol(vasile,mark);
}
function printConsol(people,people1){
   console.log(`${people.firstName} ${people.lastName}'s  BMI (${people.BMI}) is higher than ${people1.firstName} ${people1.lastName}'s (${people1.BMI})!"`);
}