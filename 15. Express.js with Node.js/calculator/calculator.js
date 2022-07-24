const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html');
});

app.get('/bmicalculator', (req, res) =>{
    res.sendFile(__dirname + '/bmicalculator.html');
});

app.post('/bmicalculator', (req, res) =>{
    let weight = req.body.weight;
    let height = req.body.height;

    let bmi = weight / (height ** 2);

    res.send('BMI is ', bmi);
});

app.post('/', (req, res) =>{
    
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send('The result of the calculation is ', result);
});

app.listen(3000, () =>{
    console.log('Spinning Server');
});