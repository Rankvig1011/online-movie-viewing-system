import userController from "../controller/user.controller.js";
import express from 'express';
import middleware from "../middleware/index.js";

const router = express.Router();

router.get('/',middleware.authenticate, middleware.authorizeForAdmin, userController.find);
router.get('/:id',middleware.authenticate, userController.findById);
router.post('/', userController.create);
router.put('/:id',middleware.authenticate, userController.update);
router.delete('/:id',middleware.authenticate, userController.delete);

export const userRouter = router;