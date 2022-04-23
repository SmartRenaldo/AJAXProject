const express = require('express');

const app = express();

app.all('/axios-server', (request, response) => {
    //set response header; set allow cross domain
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = { name: 'beef' };
    response.send(JSON.stringify(data));
});

app.listen(3030, () => {
    console.log('server starting......');
});
