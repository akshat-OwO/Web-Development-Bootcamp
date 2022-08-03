const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB', { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please check your data entry, no name specified']
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit({
    rating: 10,
    review: 'Peaches are so yummy'
});

fruit.save();

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

person.save();

// Fruit.insertMany([kiwi, orange, banana], (err) =>{
//     if(err){
//         console.log(err);
//     } else{
//         console.log('successfully saved all the fruits to frutitsDB');
//     }
// });

Fruit.find((err, fruits) =>{
    if(err){
        console.log(err);
    } else{
        mongoose.connection.close();
        fruits.forEach(fruit =>{
            console.log(fruit.name);
        });
    }
});