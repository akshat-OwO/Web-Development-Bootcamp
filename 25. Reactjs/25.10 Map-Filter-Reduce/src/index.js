import emojipedia from './emojipedia';
// var numbers = [3, 56, 2, 48, 5];

//!Map -Create a new array by doing something with each item in an array.

// function double(x){
//     return x * 2;
// }

// const newNumbers = numbers.map(double);
// console.log(newNumbers);

// const newNumbers = [];
// function double(x){
//     newNumbers.push(x * 2);
// }
// numbers.forEach(double);
// console.log(newNumbers);

//!Filter - Create a new array by keeping the items that return true.

// const newNumbers = numbers.filter((num) => {
//     return num > 10;
// });
// console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.

// const newNumber = numbers.reduce((acc, curr) => {
//     return acc + curr;
// });

// console.log(newNumber);

//Find - find the first item that matches from an array.

// const newNumber = numbers.find((num) => {
//     return num < 10;
// });
// console.log(newNumber);

//FindIndex - find the index of the first item that matches.

// const newNumber = numbers.findIndex((num) => {
//     return num < 10;
// });
// console.log(newNumber);

// !Challenge

const slicedArray = emojipedia.map(emoji => {
    return emoji.meaning.slice(0, 100);
});
console.log(slicedArray);