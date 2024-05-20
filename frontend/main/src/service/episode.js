import { GenaralService } from './general';

export class EpisodeService extends GenaralService {
    constructor() {
        super('episode');
    }

    async getEpisodeByMovieId(movieId) {
        return await this.get(`/episode?movie=${movieId}`);
    }
}
