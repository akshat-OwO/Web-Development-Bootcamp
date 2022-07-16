const buttons = document.querySelectorAll('.drum');
let tom1 = new Audio('sounds/tom-1.mp3');

buttons.forEach(button =>{
    button.addEventListener('click', () =>{
        console.log(button);
        button.style.color = 'white';
        tom1.play();
    });
});
