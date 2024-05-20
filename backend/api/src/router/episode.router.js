import episodeController from '../controller/episode.controller.js';
import express from 'express';
import middleware from '../middleware/index.js';

const router = express.Router();

router.get('/', episodeController.find);
router.get('/:id', episodeController.findById);
router.get('/?movie=:id', episodeController.findEpisodeByMovieId);
router.use(middleware.authenticate);
router.use(middleware.authorizeForAdmin);
router.post('/', episodeController.create);
router.put('/:id', episodeController.update);
router.delete('/:id', episodeController.delete);

export const episodeRouter = router;
