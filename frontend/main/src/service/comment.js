import axiosClient from '@/config';
import { GenaralService } from './general';

export class CommentService extends GenaralService {
    constructor() {
        super('comment');
    }

    async getCommentByMovieId(id) {
        return await axiosClient.get(`/comment/movie?movie=${id}`);
    }
}
