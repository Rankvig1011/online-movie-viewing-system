import UserService from './user.service.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { ErrorApp } from '../common/index.js';

class AuthService {
    userService = UserService;
    keyToken = 'DOAN';
    constructor() {}

    async login(username, password) {
        if (!username || !password) {
            throw new ErrorApp('Invalid username or password', 400);
        }
        const user = await this.userService.findOne({ username });
        if (user && this.comparePassword(password, user.password)) {
            const { password, ...result } = user['_doc'];
            return this.createToken(result);
        } else {
            throw new ErrorApp('Invalid username or password', 400);
        }
    }

    async register(user) {
        if (!user.username || !user.password) {
            throw new ErrorApp('Invalid username or password', 400);
        }
        if (await this.userService.findOne({ username: user.username })) {
            throw new ErrorApp('Username is already taken', 400);
        }
        const result = await this.userService.create(user);
        return this.createToken(result);
    }

    async me(token) {
        try {
            const decoded = jwt.verify(token, this.keyToken);
            return this.userService.findOne({ username: decoded.username }, '-password');
        } catch (error) {
            throw new ErrorApp('Invalid token', 401);
        }
    }

    async loginGoogle(user) {
        const result = await this.userService.createWithGoogle(user);
        return this.createToken(result);
    }

    comparePassword(password, hash) {
        return bcrypt.compareSync(password, hash);
    }

    createToken(result) {
        const payload = {
            username: result.username,
            sub: result._id,
            role: result.role,
            level: result.level,
        };
        return {
            access_token: jwt.sign(payload, this.keyToken, {
                expiresIn: '10d',
            }),
        };
    }
}

export default new AuthService();
