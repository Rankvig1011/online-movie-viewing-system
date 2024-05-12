import {  v2 } from "cloudinary";
import { folderCloudinary } from "../common/index.js";
import fs from 'fs';

v2.config({
    cloud_name: 'ducw36fi3',
    api_key: '363665853292734',
    api_secret: 'CG-o4IuNJA-n_oxA6duU4VCwpbs'
  });

class CommonService {
    uploadFile(file , folderClound) {
        return new Promise((resolve, reject) => {
            const fileStream = fs.createReadStream(file.buffer);
            const upload = v2.uploader.upload_stream({folder:folderCloudinary(folderClound)},(error, result) => {
                if (error) return reject(error);
                resolve(result);
            });
            fileStream.pipe(upload);
        });
    } 
    uploadURL (url, folderClound) {
        return new Promise((resolve, reject) => {
            v2.uploader.upload(url, {folder: folderClound}, (error, result) => {
                if (error) return reject(error);
                resolve(result);
            });
        });
    }
}

export default new CommonService();