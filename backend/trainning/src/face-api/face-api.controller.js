import faceApiService from "./face-api.service.js";

class FaceApiController {
  search(req, res) {
    try {
      console.log("req.files", req.files);
      const data = faceApiService.search(req.file);
      res.json({ data });
    } catch (error) {
      console.log(error);
    }
  }

  searchURL(req, res) {
    console.log(req.url);
    return faceApiService.searchUrl(req.url);
  }
}

export default new FaceApiController();
