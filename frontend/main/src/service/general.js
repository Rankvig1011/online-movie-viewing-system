import axiosClient from '@/config';

export class GenaralService {
    constructor(url) {
        this.url = url;
    }
    async get() {
        return axiosClient.get(this.url);
    }
    async getById(id) {
        return axiosClient.get(`${this.url}/${id}`);
    }
    async post(data) {
        console.log('data', data);
        return axiosClient.post(this.url, data);
    }
    async patch({ id, data }) {
        return axiosClient.patch(`${this.url}/${id}`, data);
    }
    async delete(id) {
        return axiosClient.delete(`${this.url}/${id}`);
    }
}
