const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) =>{
    let today = new Date();
    let currentDay = today.getDay();
    let day = '';
    if(currentDay == 0){
        day = 'sunday';
    } else if(currentDay == 1){
        day = 'monday';
    } else if(currentDay == 2){
        day = 'tuesday';
    } else if(currentDay == 3){
        day = 'wednesday';
    } else if(currentDay == 4){
        day = 'thursday';
    } else if(currentDay == 5){
        day = 'friday';
    } else{
        day = 'saturday';
    }
    
    res.render('list', { kindOfDay: day });
});

app.listen(3000, () =>{
    console.log('Server is up and running');
});