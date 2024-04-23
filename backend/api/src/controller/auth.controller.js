import { ResponseApp } from "../common/response.js";
import authService from "../service/auth.service.js";


class AuthController {
    constructor() {
        this.authService = authService;
        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
        this.me = this.me.bind(this);
        this.loginGoogle = this.loginGoogle.bind(this);
    }
    async register(req, res) {
        try {
            const data = await this.authService.register(req.body);
            ResponseApp.created(res, data);
        } catch (error) {
            ResponseApp.failed(res, error);
        }
        
    }

    async login(req, res) {
        try {
            const data = await this.authService.login(req.body.username, req.body.password);
            ResponseApp.ok(res, data);
        } catch (error) {
            ResponseApp.failed(res, error);
        }
    }

    async me(req, res) {
        try {
            const token = req.header('Authorization').split(' ')[1];
            const data = await this.authService.me(token);
            ResponseApp.ok(res, data);
        } catch (error) {
            ResponseApp.failed(res, error);
        }
    }
    
    async loginGoogle(req, res) {
        try {
            const data = await this.authService.loginGoogle(req.body);
            ResponseApp.ok(res, data);
        } catch (error) {
            ResponseApp.failed(res, error);
        }
    }
}

export default new AuthController();