import movieModel from '../model/movie.model.js';
import GeneralService from './general.service.js';
import commonService from './common.service.js';
import categoryService from './category.service.js';
import axios from 'axios';

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
}

export default new MovieService();
