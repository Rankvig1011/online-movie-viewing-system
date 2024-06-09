import express from "express";
import { connect } from "./config/db.js";
import faceApiController from "./face-api/face-api.controller.js";
import multer from "multer";

const app = express();
app.use(express.json());
connect();
const upload = multer();
app.post("/api/search-url", upload.any(), faceApiController.search);

app.listen(3201, function () {
  console.log("Example app listening on port 3201!");
});
