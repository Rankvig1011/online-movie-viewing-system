
import userService from '../service/user.service.js';
import GeneralController from './general.controller.js'

class UserController extends GeneralController {
    constructor() {
        super(userService);
    }
    
}
export default new UserController();