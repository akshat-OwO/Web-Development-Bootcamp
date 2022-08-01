const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let newItems = ['Buy Food', 'Cook Food', 'Eat Food'];
let workItems = [];

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
    
    res.render('list', { listTitle: day, newListItems: newItems });
});

app.get('/work', (req, res) =>{
    res.render('list', { listTitle: 'Work List', newListItems: workItems });
});

app.post('/', (req, res) =>{
    let newItem = req.body.newItem;

    if(req.body.list === 'Work'){
        workItems.push(newItem);
        res.redirect('/work');
    } else{
        newItems.push(newItem);
        res.redirect('/');
    }

});

app.post('/work', (req, res) =>{
    
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect('/work');
});

app.listen(3000, () =>{
    console.log('Server is up and running');
});