import voteService from '../service/vote.service.js';
import GeneralController from './general.controller.js';

class VoteController extends GeneralController {
    constructor() {
        super(voteService);
    }
}
export default new VoteController();
