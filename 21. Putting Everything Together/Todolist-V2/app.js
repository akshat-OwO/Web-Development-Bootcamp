const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const _ = require('lodash');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect('mongodb+srv://admin-akshat:test123@todolist.csajurh.mongodb.net/?retryWrites=true&w=majority');

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
    const customListName = _.capitalize(req.params.customListName);

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
    const itemName = req.body.newItem;
    const listName = req.body.list;
    

    const item = new Item({
        name: itemName
    });

    if(listName === 'Today'){
        item.save();
        res.redirect('/');
    } else{
        List.findOne({name: listName}, (err, foundList) =>{
            foundList.items.push(item);
            foundList.save();
            res.redirect('/' + listName);
        });
    }
});

app.post('/delete', (req, res) =>{
    const checkedItemId = req.body.checkbox;
    const listName = req.body.listName;

    if(listName === 'Today'){
        Item.findByIdAndRemove(checkedItemId, (err) =>{
            if(!err){
                console.log('Successfully deleted');
                res.redirect('/');
            } else{
                console.log(err);
            }
        });
    } else{
        List.findOneAndUpdate({name: listName}, {$pull: {items: {_id: checkedItemId}}}, (err, foundList) =>{
            if(!err){
                res.redirect('/' + listName);
            }
        });
    }
});

app.listen(3000, () =>{
    console.log('Server is up and running');
});