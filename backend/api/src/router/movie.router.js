import movieController from '../controller/movie.controller.js';
import express from 'express';
import middleware from '../middleware/index.js';

const router = express.Router();

router.get('/', movieController.find);
router.get('/:id', movieController.findById);
// router.use(middleware.authenticate);
// router.use(middleware.authorizeForAdmin);

router.post('/', movieController.create);
router.patch('/view/:id', movieController.updateView);
router.patch('/:id', movieController.update);
router.delete('/:id', movieController.delete);

export const movieRouter = router;
