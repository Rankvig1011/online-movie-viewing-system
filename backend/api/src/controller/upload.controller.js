import { ResponseApp } from '../common/response.js';
import commonService from '../service/common.service.js';

class UploadController {
    async upload(req, res) {
        try {
            const folder = req.params.folder;
            const file = req.files;
            if (!file) {
                ResponseApp.failed(res, 'Không có tệp nào được tải lên.', 400);
            }
            const result = await commonService.uploadFile(file[0], folder);
            ResponseApp.ok(res, result);
        } catch (error) {
            ResponseApp.failed(res, error);
        }
    }

    uploadVideo(req, res) {
        if (!req.files && !req.files.length > 0) {
            ResponseApp.failed(res, 'Không có tệp nào được tải lên.', 400);
        }
        const file = req.files[0];
        const sourcePath = file.path;
        ResponseApp.ok(res, { link: sourcePath.split('\\')[1] });
    }
}
export default new UploadController();
