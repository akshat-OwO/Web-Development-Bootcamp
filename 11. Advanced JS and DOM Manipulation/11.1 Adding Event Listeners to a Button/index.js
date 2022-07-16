const buttons = document.querySelectorAll('.drum');
console.log(buttons);

buttons.forEach(button =>{
    button.addEventListener('click', () =>{
        console.log('i got clicked');
    });
});
