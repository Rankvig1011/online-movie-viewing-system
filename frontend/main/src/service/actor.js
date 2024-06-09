import axiosClient from '@/config';
import { GenaralService } from './general';

export class ActorService extends GenaralService {
    constructor() {
        super('actor');
    }
    async post(data) {
        console.log('data', data);
        return axiosClient.post(this.url, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    }
    async patch({ id, data }) {
        return axiosClient.patch(`${this.url}/${id}`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    }
}
