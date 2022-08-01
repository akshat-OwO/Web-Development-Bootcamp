const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let newItems = ['Buy Food', 'Cook Food', 'Eat Food'];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) =>{
    let today = new Date();
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };
    
    let day = today.toLocaleDateString('en-Us', options);
    
    res.render('list', { kindOfDay: day, newListItems: newItems });
});

app.post('/', (req, res) =>{
    let newItem = req.body.newItem;
    newItems.push(newItem);
    res.redirect('/');
});

app.listen(3000, () =>{
    console.log('Server is up and running');
});