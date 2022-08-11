const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

mongoose.connect('mongodb://127.0.0.1:27017/wikiDB');

const articlesSchema = {
    title: String,
    content: String
}

const Article = mongoose.model('Article', articlesSchema);

app.get('/articles', (req, res) =>{
    Article.find({}, (err, foundList) =>{
        if(!err){
            res.send(foundList);
        } else{
            res.send(err);
        }
    });
});

app.post('/articles', (req, res) =>{

    const newArticle = new Article({
        title: req.body.title,
        content: req.body.content
    });
    newArticle.save((err) =>{
        if(!err){
            res.send('Successfully added a new article');
        } else{
            res.send(err);
        }
    });

});

app.delete('/articles', (req, res) =>{
    Article.deleteMany({}, (err) =>{
        if(!err){
            res.send('Successfully deleted all articles');
        } else{
            res.send(err);
        }
    });
});

app.listen(3000, () =>{
    console.log('Server is running on port 3000');
});