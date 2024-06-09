import commentController from '../controller/comment.controller.js';
import express from 'express';

const router = express.Router();

router.get('/movie', commentController.findCommentByMovieId);
router.get('/:id', commentController.findById);
router.post('/', commentController.create);
router.patch('/:id', commentController.update);
router.delete('/:id', commentController.delete);

export const commentRouter = router;
