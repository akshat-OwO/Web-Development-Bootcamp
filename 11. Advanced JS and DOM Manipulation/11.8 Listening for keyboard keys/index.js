const buttons = document.querySelectorAll('.drum');
let tom1 = new Audio('sounds/tom-1.mp3');
let tom2 = new Audio('sounds/tom-2.mp3');
let tom3 = new Audio('sounds/tom-3.mp3');
let tom4 = new Audio('sounds/tom-4.mp3');
let snare = new Audio('sounds/crash.mp3');
let crash = new Audio('sounds/crash.mp3');
let kickBass = new Audio('sounds/kick-bass.mp3');

const makeSound = (key) =>{
    switch (key) {
        case 'w':
            tom1.play();
            break;
        case 'a':
            tom2.play();
            break;
        case 's':
            tom3.play();
            break;
        case 'd':
            tom4.play();
            break;
        case 'j':
            snare.play();
            break;
        case 'k':
            crash.play();
            break;
        case 'l':
            kickBass.play();
            break;
        default:
            console.log(key);
            break;
    }
}

buttons.forEach(button =>{
    button.addEventListener('click', () =>{
        makeSound(button.innerHTML);
    });
});

document.addEventListener('keydown', e =>{
    makeSound(e.key);
});

