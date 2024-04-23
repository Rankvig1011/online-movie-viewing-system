
import userModel from '../model/user.model.js';
import GeneralService from './general.service.js'

class UserService extends GeneralService {
    constructor() {
        super(userModel);
    }

    async createWithGoogle(user) {
        const emailExist = await this.findOne({email :user.email });
        if (emailExist) {
            throw new Error('Email already exists');
        } else {
            user = {
                ...user,
                username: "",
                password: "",
            };
            const createdUser = new this.userModel(user);
            return createdUser.save();
        }
    }
   
}
export default new UserService();
