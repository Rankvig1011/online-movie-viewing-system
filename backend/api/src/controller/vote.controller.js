import { ResponseApp } from '../common/response.js';
import voteService from '../service/vote.service.js';
import GeneralController from './general.controller.js';

class VoteController extends GeneralController {
    constructor() {
        super(voteService);
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
