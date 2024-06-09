import express from 'express';
import streamingController from '../controller/streaming.controller.js';

const router = express.Router();

router.get('/:videoId', streamingController.streamingVideo);

export const streamRouter = router;
