var guestList = ['mario', 'peach', 'luigi', 'bowser', 'toad'];

var name = prompt('Enter your name: ');
if(guestList.includes(name)){
    console.log('Accepted');
}
else{
    console.log('Rejected');
}