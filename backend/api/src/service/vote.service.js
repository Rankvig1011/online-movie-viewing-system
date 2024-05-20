import voteModel from '../model/vote.model';
import GeneralService from './general.service';

class VoteService extends GeneralService {
    constructor() {
        super(voteModel);
    }
}
export default new VoteService();
