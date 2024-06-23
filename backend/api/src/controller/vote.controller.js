import { ResponseApp } from '../common/response.js';
import movieService from '../service/movie.service.js';
import voteService from '../service/vote.service.js';
import GeneralController from './general.controller.js';

class VoteController extends GeneralController {
    constructor() {
        super(voteService);
    }
    async create(req, res) {
        try {
            const vote = await voteService.create(req.body);
            const votes = await voteService.findVoteByMovieId(req.body.movie);
            await movieService.update(req.body.movie, { totalVote: votes.length });
            ResponseApp.ok(res, vote);
        } catch (error) {
            console.error(error);
            ResponseApp.failed(res, error);
        }
    }
    async delete(req, res) {
        try {
            const { idMovie, idVote } = req.params;
            const vote = await voteService.delete(idVote);
            const votes = await voteService.findVoteByMovieId(idMovie);
            await movieService.update(idMovie, { totalVote: votes.length || 0 });
            ResponseApp.ok(res, vote);
        } catch (error) {
            console.error(error);
            ResponseApp.failed(res, error);
        }
    }

    async findVoteByMovieId(req, res) {
        try {
            const { movieId } = req.query;
            const votes = await voteService.findVoteByMovieId(movieId);
            ResponseApp.ok(res, votes);
        } catch (error) {
            console.error(error);
            ResponseApp.failed(res, error);
        }
    }
    async findVoteByUserId(req, res) {
        try {
            const { userId } = req.query;
            const votes = await voteService.findVoteByUserId(userId);
            ResponseApp.ok(res, votes);
        } catch (error) {
            console.error(error);
            ResponseApp.failed(res, error);
        }
    }
}
export default new VoteController();
