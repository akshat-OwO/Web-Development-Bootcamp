const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB', { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit({
    name: 'apple',
    rating: 7,
    review: 'pretty solid as a fruit'
});

// fruit.save();

const personSchema = new mongoose.Schema ({
    name: String,
    age: Number
});

const Person = mongoose.model('Person', personSchema);

const person = new Person({
    name: 'John',
    age: 37
});

const kiwi = new Fruit({
    name: 'kiwi',
    rating: 10,
    review: 'the best fruit'
});

const orange = new Fruit({
    name: 'orange',
    rating: 4,
    review: 'too sour for me'
});

const banana = new Fruit({
    name: 'banana',
    rating: 3,
    review: 'weird texture'
});

Fruit.insertMany([kiwi, orange, banana], (err) =>{
    if(err){
        console.log(err);
    } else{
        console.log('successfully saved all the fruits to frutitsDB');
    }
})

person.save();