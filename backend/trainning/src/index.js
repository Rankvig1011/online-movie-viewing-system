import express from 'express';
import { connect } from './config/db.js';
import faceApiController from './face-api/face-api.controller.js';

const app = express();
app.use(express.json());
connect();

app.get('/api/search-url', faceApiController.search);

app.listen(3201, function () {
  console.log('Example app listening on port 3201!');
});
