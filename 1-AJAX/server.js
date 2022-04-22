const express = require('express');

const app = express();

app.get('/server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.send('Hello AJAX!');
});

// can handle all kinds of request methods
app.all('/server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    // make self-defined headers valid
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.send('Hello AJAX POST!');
});

app.get('/server-json', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    const data = {
        "name": "jack",
    };
    let str = JSON.stringify(data);
    response.send(str);
});

app.get('/ie', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.send('Hello IE!');
});

app.get('/delay', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    // response after 3 seconds
    setTimeout(() => {
        response.send('Hello IE!');
    }, 3000);
});

app.listen(3030, () => {
    console.log('server starting......');
});
