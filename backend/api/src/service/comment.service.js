import commentModel from '../model/comment.model.js';
import GeneralService from './general.service.js';
import userModel from '../model/user.model.js';

class CommentService extends GeneralService {
    constructor() {
        super(commentModel);
    }

    async findCommentByMovieId(movie) {
        return await commentModel
            .find({ movie })
            .populate('user', ['name', 'avatar'])
            .populate({
                path: 'reply',
                populate: [
                    {
                        path: 'userPost',
                        model: userModel,
                        select: ['name', 'avatar'],
                    },
                    {
                        path: 'userReply',
                        model: userModel,
                        select: ['name', 'avatar'],
                    },
                ],
            });
    }
}
export default new CommentService();
