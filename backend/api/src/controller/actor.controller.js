import { ResponseApp } from '../common/response.js';
import actorService from '../service/actor.service.js';
import GeneralController from './general.controller.js';

class ActorController extends GeneralController {
    constructor() {
        super(actorService);
    }
}
export default new ActorController();
