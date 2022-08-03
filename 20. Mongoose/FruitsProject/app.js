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

// const fruit = new Fruit({
//     rating: 10,
//     review: 'Peaches are so yummy'
// });

// fruit.save();

const personSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model('Person', personSchema);

const mango = new Fruit({
    name: 'mango',
    rating: 6,
    review: "decent fruit"
});

mango.save();

Person.updateOne({name: 'John'}, {favouriteFruit: mango}, (err) =>{
    if(err){
        console.log(err);
    } else{
        console.log("Successfully updated the document");
    }
})

// const person = new Person({
//     name: 'Amy',
//     age: 12,
//     favouriteFruit: mango
// });

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

// person.save();

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

// Fruit.updateOne({_id: "62ea747e52a68844dc80e4d4"}, {name: 'peach'}, (err) =>{
//     if(err){
//         console.log(err);
//     } else{
//         console.log('Successfully updated the document');
//     }
// });

// Fruit.deleteOne({name: 'peach'}, (err) =>{
//     if(err){
//         console.log(err);
//     } else{
//         console.log('Successfully deleted the document');
//     }
// });

// Person.deleteMany({name: 'John'}, (err) =>{
//     if(err){
//         console.log(err);
//     } else{
//         console.log('Successfully deleted John');
//     }
// });