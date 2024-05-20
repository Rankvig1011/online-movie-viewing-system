import commentController from '../controller/comment.controller.js';
import express from 'express';

const router = express.Router();

router.get('/', commentController.find);
router.get('/:id', commentController.findById);
router.get('/?movie=:id', commentController.findCommentByMovieId);
router.post('/', commentController.create);
router.put('/:id', commentController.update);
router.delete('/:id', commentController.delete);

export const commentRouter = router;
