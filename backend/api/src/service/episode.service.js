
import episodeModel from '../model/episode.model.js';
import GeneralService from './general.service.js'

class EpisodeService extends GeneralService {
    constructor() {
        super(episodeModel);
    }

    async findEpisodeByMovieId(movie) {
        return await episodeModel.find({ movie });
    }

}
export default new EpisodeService();