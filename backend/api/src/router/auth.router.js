import express from 'express';
import authController from '../controller/auth.controller.js';
import middleware from '../middleware/index.js';

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/login/google', authController.loginGoogle);
router.get('/profile', middleware.authenticate, authController.me);

export const authRouter = router;
