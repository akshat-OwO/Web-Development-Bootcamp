function BMICalc(weight, height){
    return weight/(height**2);
}

var bmi = BMICalc(65, 1.8);
console.log(bmi);