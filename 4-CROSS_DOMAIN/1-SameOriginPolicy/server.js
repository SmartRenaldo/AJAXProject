const express = require('express');

const app = express();

app.get('/home', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});

app.get('/data', (request, response) => {
    response.send('user data');
});

app.listen(3030, () => {
    console.log('server starting......');
});
