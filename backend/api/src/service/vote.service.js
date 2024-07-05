import voteModel from '../model/vote.model.js';
import GeneralService from './general.service.js';

class VoteService extends GeneralService {
    constructor() {
        super(voteModel);
    }

    async findVoteByMovieId(movie) {
        return await voteModel
            .find({ movie })
            .populate('user', ['name', 'avatar'])
            .populate('movie', ['name', 'isVip']);
    }
    async findVoteByUserId(userId) {
        return await voteModel
            .find({ user: userId })
            .populate('user', ['name', 'avatar'])
            .populate('movie');
    }
}
export default new VoteService();
