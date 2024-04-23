
const express = require('express');
const { connect } = require('./config/db');

const app = express();
app.use(express.json());
connect();

app.listen(3201, function () {
  console.log('Example app listening on port 3201!');
});
