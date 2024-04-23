import {  v2 } from "cloudinary";
import { folderCloudinary } from "../common/index.js";
import fs from 'fs';

v2.config({
    cloud_name: 'your_cloud_name',
    api_key: 'your_api_key',
    api_secret: 'your_api_secret'
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
}

export default new CommonService();