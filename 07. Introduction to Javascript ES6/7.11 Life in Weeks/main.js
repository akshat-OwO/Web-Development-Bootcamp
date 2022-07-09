function lifeInWeeks(age){
    console.log('you have ' + (90*365 - age*365) + ' days,' + (90*52 - age*52) + ' weeks,' + (90*12 - age*12) + ' months left' );
}
var age = prompt('Enter your age: ');
lifeInWeeks(age);