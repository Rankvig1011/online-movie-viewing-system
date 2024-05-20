import { v2 } from 'cloudinary';
import fs from 'fs';
import stream from 'stream';

v2.config({
    cloud_name: 'ducw36fi3',
    api_key: '363665853292734',
    api_secret: 'CG-o4IuNJA-n_oxA6duU4VCwpbs',
});

class CommonService {
    uploadFile(file, folderClound) {
        return new Promise((resolve, reject) => {
            const upload = v2.uploader.upload_stream({ folder: folderClound }, (error, result) => {
                if (error) return reject(error);
                resolve(result);
            });
            if (file && file.buffer) {
                const bufferStream = new stream.PassThrough();
                bufferStream.end(file.buffer);
                bufferStream.pipe(upload);
            } else {
                reject(new Error('Đối tượng tệp không hợp lệ hoặc thiếu bộ đệm.'));
            }
        });
    }
    uploadURL(url, folderClound) {
        return new Promise((resolve, reject) => {
            v2.uploader.upload(url, { folder: folderClound }, (error, result) => {
                if (error) return reject(error);
                resolve(result);
            });
        });
    }
}

export default new CommonService();
