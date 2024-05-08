import { ResponseApp } from "../common/response.js";

class GeneralController {
    constructor(service) {
        this.service = service;
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
        this.find = this.find.bind(this);
        this.findOne = this.findOne.bind(this);
        this.findById = this.findById.bind(this);

    }
    async create(req, res) {
        try {
            const data = await this.service.create(req.body);
            ResponseApp.created(res, data);
        } catch (error) {
            ResponseApp.failed(res, error);
        }
    }
    async update(req, res) {
        try {
            const data = await this.service.update(req.params.id, req.body);
            ResponseApp.ok(res, data);
        } catch (error) {
            ResponseApp.failed(res, error );
        }
    }
     async delete(req, res) {
        try {
            await this.service.delete(req.params.id);
            ResponseApp.done(res);
        } catch (error) {
            ResponseApp.failed(res, error );
        }
    }
    async find(req, res) {
        try {
            const data = await this.service.find();
            ResponseApp.ok(res, data);
        } catch (error) {
            ResponseApp.failed(res, error);
        }
    }
    async findOne(req, res) {
        try {
            const data = await this.service.findOne(req.params.id);
            ResponseApp.ok(res, data);
        } catch (error) {
            ResponseApp.failed(res, error );
        }
    }
    async findById(req, res) {
        try {
            const data = await this.service.findById(req.params.id);
            ResponseApp.ok(res, data);
        } catch (error) {
            ResponseApp.failed(res, error );
        }
    }
}
export default GeneralController;