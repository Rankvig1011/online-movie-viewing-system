import axiosClient from '@/config';
import { GenaralService } from './general';

export class voteService extends GenaralService {
    constructor() {
        super('vote');
    }

    async getVoteByMovieId(movieId) {
        return await axiosClient.get(`/vote?movie=${movieId}`);
    }
}
