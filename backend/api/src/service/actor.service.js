
import actorModel from '../model/actor.model.js';
import GeneralService from './general.service.js'

class ActorService extends GeneralService {
    constructor() {
        super(actorModel);
    }
   
}
export default new ActorService();