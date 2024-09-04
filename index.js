const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/about.html'));
});

app.get('/contact-me', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/contact-me.html'));
});  

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/404.html'));
});

app.listen(8080, () => {
    console.log('Server is up on port 8080');
});