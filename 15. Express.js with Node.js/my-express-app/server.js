const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send('Hello');
});

app.get('/contact', (req, res) =>{
    res.send('Contact');
});

app.get('/about', (req, res) =>{
    res.send('About');
});

app.listen(3000, () =>{
    console.log('Started Server on port 3000');
});