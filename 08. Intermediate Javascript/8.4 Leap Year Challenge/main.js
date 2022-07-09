var year = prompt('Enter your year: ');

if(year % 4 == 0){
    if(year % 100 == 0){
        if(year % 400 == 0){
            console.log('Leap Year');
        } else {
            console.log('Not Leap year');
        }
    } else{
        console.log('Leap Year');
    }
} else{
    console.log('Not Leap Year');
}