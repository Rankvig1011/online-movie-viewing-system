import episodeService from '../service/episode.service.js';
import GeneralController from './general.controller.js';

class EpisodeController extends GeneralController {
    constructor() {
        super(episodeService);
    }

    async findEpisodeByMovieId(req, res) {
        try {
            const { movie } = req.params;
            const episodes = await episodeService.findEpisodeByMovieId(movie);
            ResponseApp.ok(episodes, res);
        } catch (error) {
            ResponseApp.failed(error, res);
        }
    }
}
export default new EpisodeController();
