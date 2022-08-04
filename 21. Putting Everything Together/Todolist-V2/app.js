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

const listSchema = {
    name: String,
    items: [itemsSchema]
};

const List = mongoose.model('List', listSchema);

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

app.get('/:customListName', (req, res) =>{
    const customListName = req.params.customListName;

    List.findOne({name: customListName}, (err, foundList) =>{
        if(!err){
            if(!foundList){
                const list = new List({
                    name: customListName,
                    items: defaultItems
                });
                list.save();
                res.redirect('/' + customListName);
            } else{
                res.render('list', {listTitle: foundList.name, newListItems: foundList.items});
            }
        }
    });

});

app.post('/', (req, res) =>{
    let itemName = req.body.newItem;

    const item = new Item({
        name: itemName
    });

    item.save();
    res.redirect('/');
});

app.post('/delete', (req, res) =>{
    const checkedItemId = req.body.checkbox;
    console.log(checkedItemId);
    Item.findByIdAndRemove(checkedItemId, (err) =>{
        if(!err){
            console.log('Successfully deleted');
            res.redirect('/');
        } else{
            console.log(err);
        }
    });
});

app.listen(3000, () =>{
    console.log('Server is up and running');
});