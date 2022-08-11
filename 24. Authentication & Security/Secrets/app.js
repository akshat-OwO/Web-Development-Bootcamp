const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) =>{
    res.render('home');
});

app.get('/login', (req, res) =>{
    res.render('login');
});

app.get('/register', (req, res) =>{
    res.render('register');
});

app.listen(3000, () =>{
    console.log('Server is running on PORT 3000');
});