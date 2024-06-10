import faceApiService from "./face-api.service.js";

class FaceApiController {
  search(req, res) {
    try {
      const data = faceApiService.search(req.files[0]);
      res.json({ data });
    } catch (error) {
      console.log(error);
    }
  }

  async searchURL(req, res) {
    console.log(req.body.url);
    try {
      const data = await faceApiService.searchUrl(req.body.url);
      console.log("data", data);
      res.json({ data });
    } catch (error) {
      console.log(error);
    }
  }
}

export default new FaceApiController();
