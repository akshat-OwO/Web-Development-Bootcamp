const add = (num1, num2) =>{
    return num1 + num2;
}

const multiply = (num1, num2) =>{
    return num1 * num2;
}

const calculator = (num1, num2, operator) => {
    return operator(num1, num2);
}

console.log(calculator(2, 3, multiply));
console.log(calculator(2, 3, add));