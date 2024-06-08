import { ResponseApp } from '../common/response.js';
import episodeService from '../service/episode.service.js';
import GeneralController from './general.controller.js';

class EpisodeController extends GeneralController {
    constructor() {
        super(episodeService);
    }

    async findEpisodeByMovieId(req, res) {
        try {
            const { movie } = req.query;
            const episodes = await episodeService.findEpisodeByMovieId(movie);
            ResponseApp.ok(res, episodes);
        } catch (error) {
            ResponseApp.failed(res, error);
        }
    }
}
export default new EpisodeController();
