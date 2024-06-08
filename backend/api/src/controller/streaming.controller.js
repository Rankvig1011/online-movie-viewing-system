import { ResponseApp } from '../common/response.js';
import streamingService from '../service/streaming.service.js';

class StreamController {
    async streamingVideo(req, res) {
        try {
            await streamingService.streamingVideo(req, res);
        } catch (error) {
            ResponseApp.failed(res, error);
        }
    }
}
export default new StreamController();
