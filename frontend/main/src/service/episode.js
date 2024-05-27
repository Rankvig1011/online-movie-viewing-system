import axiosClient from '@/config';
import { GenaralService } from './general';

export class EpisodeService extends GenaralService {
    constructor() {
        super('episode');
    }

    async getEpisodeByMovieId(movieId) {
        return await axiosClient.get(`/episode?movie=${movieId}`);
    }
}
