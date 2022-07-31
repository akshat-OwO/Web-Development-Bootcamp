const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) =>{
    let today = new Date();
    if(today.getDay() == 6 || today.getDay() == 0){
        res.send("Yay it's weekend");
    }
});

app.listen(3000, () =>{
    console.log('Server is up and running');
});