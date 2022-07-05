var name = 'akshat';
console.log(name);
name = name.toUpperCase();
console.log(name);
name = name.toLowerCase();
console.log(name);

var yourName = prompt('What is your name? ');
var firstLetter = yourName.slice(0, 1);
firstLetter = firstLetter.toUpperCase();
var remainLetter = yourName.slice(1, yourName.length);

console.log('Hello, ' + firstLetter + remainLetter);