const express = require('express');
const https = require('https');
const app = express();

app.get('/', (req, res) =>{
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=498ef0bbf7dfc787b385e476820cb6d9&units=metric';
    https.get(url, (response) =>{
        console.log(response.statusCode);

        response.on('data', (data) =>{
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = 'http://openweathermap.org/img/wn/' + icon + '@2x.png'

            res.setHeader('Content-Type', 'text/html');
            res.write('<h2> The weather is currently ' + description + ' </h2>');
            res.write('<h1> The temperature in London is ' + temp + '&#8451 </h1>');
            res.write(`<img src="${imageURL}">`);
            res.send();
        });
    });
});




app.listen(3000, () =>{
    console.log('Server is running on port 3000');
});