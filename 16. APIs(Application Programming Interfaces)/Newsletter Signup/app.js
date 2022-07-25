const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/signup.html');
});

app.post('/', (req, res) =>{
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.eMail;

    const data = {
        members: [
            {
                email_address: email,
                status: 'subscribed',
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const url = 'https://us18.api.mailchimp.com/3.0/lists/eadcc5ba22';

    const options = {
        method: 'POST',
        auth: 'akshat:2dace37ba8ee35bd78bb4218413b375d-us18'
    }

    const request = https.request(url, options, (response) =>{
        response.on('data', (data) =>{
            console.log(JSON.parse(data));
        });
    });
    request.write(jsonData);
    request.end();
});

app.listen(3000, () =>{
    console.log('server is running on port 3000');
});

// API key
// 2dace37ba8ee35bd78bb4218413b375d-us18

// List ID
// eadcc5ba22