
import { ResponseApp } from '../common/response.js';
import movieService from '../service/movie.service.js';
import GeneralController from './general.controller.js'

class MovieController extends GeneralController {
    constructor() {
        super(movieService);
    }

    async findVipMovies(req, res) {
        try {
            const movies = await movieService.findVipMovies();
            ResponseApp.ok(movies, res);
        } catch (error) {
            ResponseApp.failed(error, res);
        }
    }

    async findByImage (req, res) {
        try {
            const { file } = req;
            const result = await movieService.findByImage(file);
            ResponseApp.ok(result, res);
        } catch (error) {
            ResponseApp.failed(error, res);
        }
    }

    async findTopViewByCategory (req, res) {
        try {
            const movies = await movieService.findTopViewByCategory();
            ResponseApp.ok(movies, res);
        } catch (error) {
            ResponseApp.failed(error, res);
        }
    }

    async findTopView (req, res) {
        try {
            const movies = await movieService.findTopView();
            ResponseApp.ok(movies, res);
        } catch (error) {
            ResponseApp.failed(error, res);
        }
    }
}
export default new MovieController();