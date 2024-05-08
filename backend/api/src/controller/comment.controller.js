
import commentService from '../service/comment.service.js';
import GeneralController from './general.controller.js'

class CommentController extends GeneralController {
    constructor() {
        super(commentService);
    }

    async findCommentByMovieId(req, res) {
        try {
            const { movie } = req.params;
            const comments = await commentService.findCommentByMovieId(movie);
            ResponseApp.ok(comments, res);
        } catch (error) {
            ResponseApp.failed(error, res);
        }
    }
}
export default new CommentController();