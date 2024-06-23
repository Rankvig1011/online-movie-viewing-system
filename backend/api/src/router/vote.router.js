import voteController from '../controller/vote.controller.js';
import express from 'express';

const router = express.Router();

router.get('/movie', voteController.findVoteByMovieId);
router.get('/user', voteController.findVoteByUserId);
router.get('/', voteController.find);
router.get('/:id', voteController.findById);
router.post('/', voteController.create);
router.put('/:id', voteController.update);
router.delete('/:idVote/:idMovie', voteController.delete);

export const voteRouter = router;
