import { ResponseApp } from '../common/response.js';
import movieService from '../service/movie.service.js';
import GeneralController from './general.controller.js';

class MovieController extends GeneralController {
    constructor() {
        super(movieService);
    }

    async findVipMovies(req, res) {
        try {
            const movies = await movieService.findVipMovies();
            ResponseApp.ok(res, movies);
        } catch (error) {
            ResponseApp.failed(res, error);
        }
    }

    async findByImage(req, res) {
        try {
            const { file } = req;
            const result = await movieService.findByImage(file);
            ResponseApp.ok(res, result);
        } catch (error) {
            ResponseApp.failed(res, error);
        }
    }

    async findTopViewByCategory(req, res) {
        try {
            const movies = await movieService.findTopViewByCategory();
            ResponseApp.ok(res, movies);
        } catch (error) {
            ResponseApp.failed(res, error);
        }
    }

    async findTopView(req, res) {
        try {
            const movies = await movieService.findTopView();
            ResponseApp.ok(res, movies);
        } catch (error) {
            ResponseApp.failed(res, error);
        }
    }
}
export default new MovieController();
