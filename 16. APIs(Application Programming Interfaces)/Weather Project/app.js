const express = require('express');
const https = require('https');
const app = express();

app.get('/', (req, res) =>{
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=498ef0bbf7dfc787b385e476820cb6d9&units=metric';
    https.get(url, (response) =>{
        console.log(response);
    });
    res.send('server is up and running');
});




app.listen(3000, () =>{
    console.log('Server is running on port 3000');
});