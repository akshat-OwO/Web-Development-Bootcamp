const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect('mongodb://127.0.0.1:27017/todoListDB');

const itemsSchema = {
    name: String
}

const Item = mongoose.model('Item', itemsSchema);

const first = new Item({
    name: 'Welcome to your todolist'
});

const second = new Item({
    name: 'Hit the + button to add a new item'
});

const third = new Item({
    name: '<--Hit this to delete an item'
});

const defaultItems = [first, second, third];

app.get('/', (req, res) =>{

    Item.find((err, items) =>{
        if(items.length === 0){
            Item.insertMany(defaultItems, (err) =>{
                if(err){
                    console.log(err);
                } else{
                    console.log('Successfully added defaultItems');
                }
            });
            res.redirect('/');
        } else{
            res.render('list', { listTitle: "Today", newListItems: items });
        }
    });
});

app.get('/work', (req, res) =>{
    res.render('list', { listTitle: 'Work List', newListItems: workItems });
});

app.post('/', (req, res) =>{
    let itemName = req.body.newItem;

    const item = new Item({
        name: itemName
    });

    item.save();
    res.redirect('/');
});

app.post('/work', (req, res) =>{
    
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect('/work');
});

app.listen(3000, () =>{
    console.log('Server is up and running');
});