var num = Math.random();
num = num*100;
num = Math.floor(num) + 1;

if(num > 70){
    console.log(num + ' Your score is greater than 70');
} if(num > 30 && num <= 70){
    console.log(num + ' Your score is lower than 70 and greater than 30');
} if(num <= 30){
    console.log(num + ' Your score is lower than 30');
}