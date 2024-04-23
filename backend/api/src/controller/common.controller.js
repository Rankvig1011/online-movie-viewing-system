import { ResponseApp } from "../common/response";
import commonService from "../service/common.service";


class CommonController {
    commonService = commonService;
    
    async uploadFile(req, res) {
        try {
            const data = await this.commonService.uploadFile(req.file, req.body.folder);
            ResponseApp.ok(res, data);
        }   
        catch (error) {
            console.error(error);
            ResponseApp.failed(res, error);
        }
    }
}

export default new CommonController();