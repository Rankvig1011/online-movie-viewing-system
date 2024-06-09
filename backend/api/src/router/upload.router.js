import express from 'express';
import uploadController from '../controller/upload.controller.js';
import multer from 'multer';
import fs from 'fs';

const router = express.Router();

const uploadDir = './uploads/';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

// Init upload
const upload = multer({
    storage: storage,
    limits: { fileSize: 100 * 1024 * 1024 }, // 100 MB limit
});

const upload2 = multer();

router.post('/video', upload.any(), uploadController.uploadVideo);

router.post('/:folder', upload2.any(), uploadController.upload);

export const uploadRouter = router;
