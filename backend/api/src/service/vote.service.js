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
    async findVoteByUserId(user) {
        return await voteModel
            .find({ user })
            .populate('user', ['name', 'avatar'])
            .populate('movie');
    }
}
export default new VoteService();
