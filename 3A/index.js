const express = require("express");
const app = express();
const port = 3000;

var homeRouter = require('./routes/home');
app.use('/', homeRouter);

app.listen(port, () => {
  console.log("Server Started...");
});

const path = require('path');
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');

const describeRouter = require('./routes/describe');
app.use('/describe', describeRouter);