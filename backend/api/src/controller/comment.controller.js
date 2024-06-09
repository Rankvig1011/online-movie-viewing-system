import { ResponseApp } from '../common/response.js';
import commentService from '../service/comment.service.js';
import GeneralController from './general.controller.js';

class CommentController extends GeneralController {
    constructor() {
        super(commentService);
    }

    async findCommentByMovieId(req, res) {
        try {
            const { movie } = req.query;

            const comments = await commentService.findCommentByMovieId(movie);
            ResponseApp.ok(res, comments);
        } catch (error) {
            ResponseApp.failed(res, error);
        }
    }
}
export default new CommentController();
