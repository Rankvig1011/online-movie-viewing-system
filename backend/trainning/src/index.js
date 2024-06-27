import express from "express";
import { connect } from "./config/db.js";
import faceApiController from "./face-api/face-api.controller.js";
import multer from "multer";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3200",
  })
);

connect();
const upload = multer();
app.post("/api/search-image-url", faceApiController.searchURL);

app.post("/api/search-image", upload.any(), faceApiController.search);

app.listen(3201, function () {
  console.log("Example app listening on port 3201!");
});
