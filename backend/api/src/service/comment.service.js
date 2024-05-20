import commentModel from '../model/comment.model';
import GeneralService from './general.service.js';
import userModel from '../model/user.model';

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
                        model: userModel.name,
                        select: ['name', 'avatar'],
                    },
                    {
                        path: 'userReply',
                        model: userModel.name,
                        select: ['name'],
                    },
                ],
            });
    }
}
export default new CommentService();
