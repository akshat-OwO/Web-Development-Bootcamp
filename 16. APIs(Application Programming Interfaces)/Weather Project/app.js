const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) =>{

    res.sendFile(__dirname + '/index.html');
    
});

app.post('/', (req, res) =>{
    const query = req.body.cityName;
    const apikey = '498ef0bbf7dfc787b385e476820cb6d9';
    const unit = 'metric';
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+query+'&appid='+ apikey +'&units=' + unit;
    
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
            res.write('<h1> The temperature in '+ query +' is ' + temp + '&#8451 </h1>');
            res.write(`<img src="${imageURL}">`);
            res.send();
        });
    });
});




app.listen(3000, () =>{
    console.log('Server is running on port 3000');
});