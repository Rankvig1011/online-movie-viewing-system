import movieModel from '../model/movie.model.js';
import GeneralService from './general.service.js';
import commonService from './common.service.js';
import categoryService from './category.service.js';
import axios from 'axios';
import { createSlug } from '../common/index.js';
import actorModel from '../model/actor.model.js';

class MovieService extends GeneralService {
    commonService = commonService;
    categoryService = categoryService;
    constructor() {
        super(movieModel);
    }

    async find() {
        return await movieModel.find().populate('category').populate('actors');
    }

    async findById(id) {
        return await movieModel.findById(id).populate('category').populate('actors');
    }

    async findVipMovies() {
        return await movieModel.find({ isVip: true }.limit(10));
    }

    async findTopViewByCategory() {
        let movie = {};
        const categoryVideo = await categoryService.find();
        for (const i in categoryVideo) {
            const item = categoryVideo[i];
            const result = await this.movieModel
                .find({ category: item._id })
                .sort({ totalView: -1 })
                .limit(10);
            movie = {
                ...movie,
                [item.name]: result,
            };
        }
        return movie;
    }

    async findByImage(file) {
        const mimeImage = ['image/gif', 'image/jpeg', 'image/png', 'image/svg+xml'];
        if (!mimeImage.includes(file?.mimetype)) {
            throw new HttpException('File is not image', 400);
        }
        const result = await commonService.uploadImage(file, 'search');
        const respon = await axios.post('http://localhost:3201/api/v1/face-api/data-link', {
            url: result.secure_url,
        });
        let queryActors = [];
        let actors = [];
        respon.data.map((item) => {
            if (item['_label'] !== 'unknown') {
                actors = [...actors, item['_label']];
                queryActors = [...queryActors, { 'actor.name': item['_label'] }];
            }
        });
        const data = await this.movieModel.find({ $and: queryActors });
        return {
            name: actors,
            data,
        };
    }

    async findTopView() {
        return movieModel.find().sort({ totalView: -1 }).limit(10);
    }

    async updateView(id) {
        return await movieModel.findByIdAndUpdate(id, { $inc: { totalView: 1 } });
    }

    async findByActors(actors) {
        const actor = await actorModel.find({ name: { $in: actors } }, '_id');
        if (actor.length > 0) {
            const data = actor.map((item) => {
                return item._id;
            });
            return await movieModel.find({ actors: { $in: data } });
        }
        return [];
    }
    async findByNameMovie(nameMovie) {
        const movie = await movieModel.find({ name: new RegExp(nameMovie, 'i') });
        console.log('movie::', movie);
        return movie;
    }

    async findByImageMovie(url) {
        const respon = await axios.post('http://localhost:3201/api/search-image-url', { url });
        const listData = respon.data?.data;
        if (listData) {
            const movies = await this.findByActors(listData.map((item) => item._label));
            return {
                actors: listData.map((item) => item._label),
                movies,
            };
        }
        console.log('listData', listData);
        return null;
    }
}

export default new MovieService();
