import axiosClient from '@/config';
import { GenaralService } from './general';

export class MovieService extends GenaralService {
    constructor() {
        super('movie');
    }
    //patchUpdateView
    async patchUpdateView(movieId) {
        return await axiosClient.patch(`movie/view/${movieId}`);
    }
    async getMovieForName(data) {
        return await axiosClient.post(`movie/search/name`, data);
    }

    async getMovieForImage(data) {
        return await axiosClient.post('movie/search/img', data);
    }
}
