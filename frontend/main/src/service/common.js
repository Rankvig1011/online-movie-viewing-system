import axiosClient from '@/config';

export const uploadImage = async (file, folder) => {
    const data = await axiosClient.post(`upload-image/${folder}`, file, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });
    return data?.results;
};

export const uploadVideo = async (file) => {
    const data = await axiosClient.post('upload-image/video', file, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });
    return data?.results;
};
