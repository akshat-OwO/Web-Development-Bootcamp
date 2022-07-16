const leftImage = document.querySelector('.img1');
const rightImage = document.querySelector('.img2');
const header = document.querySelector('h1');

var randomNumber1 = Math.random();
randomNumber1 *= 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
console.log(randomNumber1);

var randomNumber2 = Math.random();
randomNumber2 *= 6;
randomNumber2 = Math.floor(randomNumber2) + 1;
console.log(randomNumber2);

if(randomNumber1 == 1){
    leftImage.src = 'images/dice1.png';
} else if(randomNumber1 == 2){
    leftImage.src = 'images/dice2.png';
} else if(randomNumber1 == 3){
    leftImage.src = 'images/dice3.png';
} else if(randomNumber1 == 4){
    leftImage.src = 'images/dice4.png';
} else if(randomNumber1 == 5){
    leftImage.src = 'images/dice5.png';
} else{
    leftImage.src = 'images/dice6.png';
}


if(randomNumber2 == 1){
    rightImage.src = 'images/dice1.png';
} else if(randomNumber2 == 2){
    rightImage.src = 'images/dice2.png';
} else if(randomNumber2 == 3){
    rightImage.src = 'images/dice3.png';
} else if(randomNumber2 == 4){
    rightImage.src = 'images/dice4.png';
} else if(randomNumber2 == 5){
    rightImage.src = 'images/dice5.png';
} else{
    rightImage.src = 'images/dice6.png';
}

if(randomNumber1 > randomNumber2){
    header.textContent = 'Player 1 Wins';
} else if(randomNumber1 < randomNumber2){
    header.textContent = 'Player 2 Wins';
} else{
    header.textContent = 'Draw';
}