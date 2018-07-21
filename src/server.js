const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello world');
// });

app.get('/example/b', function (req, res, next) {
    console.log('the response will be sent by the next function ...');
    next();
  }, function (req, res) {
    res.send('Hello from B!');
  });
  
app.listen(3000, () => {
    console.log('Example app listing on port 3000');
});
