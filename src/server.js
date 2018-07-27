const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const fs = require('fs');

const app = express();
app.use(express.static(path.join(__dirname, '../public/image')));
app.use(express.static(path.join(__dirname, '../view')));
app.use(express.static(path.join(__dirname, '../public/video')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/player', (req, res) => {
    res.sendFile(path.join(__dirname, '../view/player.html'));
});

  
app.listen(3000, () => {
    console.log('Example app listing on port 3000');
});
