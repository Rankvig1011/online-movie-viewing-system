import '@tensorflow/tfjs-node';
import * as faceapi from "@vladmandic/face-api";
import actorModel from "./actor.model.js";
import fetch from "node-fetch";
import * as canvas from 'canvas';

let faceMatcher;

class FaceApiService {
    constructor() {
        this.init();
    }
    async loadTrainingData() {
        const faceDescriptors = [];
        const dataTrainings = await actorModel.find();
        const dataTrainingsFilter = dataTrainings.filter(dataTraining => dataTraining.image.length > 0);
        for (const dataTraining of dataTrainingsFilter) {
            const descriptions = [];
            for (const image of dataTraining.image) {
                const img = await this.canvas.loadImage(image);
                const detections = await faceapi.detectAllFaces(img).withFaceLandmarks().withFaceDescriptors();
                detections.length > 0 && detections[0].descriptor && descriptions.push(detections[0].descriptor);
            }
            faceDescriptors.push(new faceapi.LabeledFaceDescriptors(dataTraining.name, descriptions));
        }
        return faceDescriptors;
    }
    get canvas() {
        return this._canvas;
    }

    async init() {
        this._canvas = canvas;
        const { Canvas, Image, ImageData } = this._canvas;
        faceapi.env.monkeyPatch({
            Canvas,
            Image,
            ImageData,
            fetch: fetch
        });
        await Promise.all([
            await faceapi.nets.tinyFaceDetector.loadFromDisk("src/models"),
            await faceapi.nets.ssdMobilenetv1.loadFromDisk("src/models"),
            await faceapi.nets.faceLandmark68Net.loadFromDisk("src/models"),
            await faceapi.nets.faceRecognitionNet.loadFromDisk("src/models"),
        ]);
        const trainingData = await this.loadTrainingData();
        faceMatcher = new faceapi.FaceMatcher(trainingData, 0.6);
        console.log("training done");
        console.log(faceMatcher);
    }
    async searchUrl(url) {
        const img = await this.canvas.loadImage(url);
        const detections = await faceapi.detectAllFaces(img).withFaceLandmarks().withFaceDescriptors();
        const data = detections.map(detection => faceMatcher.findBestMatch(detection.descriptor));
        return data;
    }
    async search(file) {
        const img = await faceapi.bufferToImage(file);
        const detections = await faceapi.detectAllFaces(img).withFaceLandmarks().withFaceDescriptors();
        return detections.map(detection => faceMatcher.findBestMatch(detection.descriptor).toString());
    }
}

export default new FaceApiService();