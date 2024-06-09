import express from 'express';
import actorController from '../controller/actor.controller.js';
import middleware from '../middleware/index.js';
import multer from 'multer';

const router = express.Router();
const upload = multer();

router.get('/', actorController.find);
router.get('/:id', actorController.findById);
// router.use(middleware.authenticate);
// router.use(middleware.authorizeForAdmin);
router.post('/', upload.any(), actorController.create);
router.patch('/:id', upload.any(), actorController.update);
router.delete('/:id', actorController.delete);

export const actorRouter = router;
