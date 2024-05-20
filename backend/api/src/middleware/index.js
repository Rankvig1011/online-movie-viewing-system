import { ResponseApp } from '../common/response.js';
import jwt from 'jsonwebtoken';
import { Role } from '../constants/index.js';
import { ErrorApp } from '../common/index.js';

class Middleware {
    async authenticate(req, res, next) {
        try {
            const token = req.header('Authorization');
            if (!token || !token.startsWith('Bearer ')) {
                return ResponseApp.failed(res, new ErrorApp('Invalid token', 401));
            }
            try {
                const decodeTokenData = jwt.verify(token.split(' ')[1], 'DOAN');
                req.roleUser = decodeTokenData.role;
                req.userId = decodeTokenData.id;
                next();
            } catch {
                return ResponseApp.failed(res, new ErrorApp('Invalid token', 401));
            }
        } catch (error) {
            ResponseApp.failed(res, error, 401);
        }
    }
    async authorizeForAdmin(req, res, next) {
        if (req.roleUser !== Role.Admin) {
            return ResponseApp.failed(res, new Forbidden());
        }
        next();
    }

    async authorizeForUser(req, res, next) {
        if (req.roleUser !== Role.User) {
            return ResponseApp.failed(
                res,
                new ErrorApp('You are not allowed to access this resource', 403)
            );
        }
        next();
    }
}

export default new Middleware();
