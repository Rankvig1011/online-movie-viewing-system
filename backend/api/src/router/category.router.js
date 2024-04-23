import express from 'express';
import categoryController from '../controller/category.controller.js';
import middleware from '../middleware/index.js';

const router = express.Router();

router.get('/', categoryController.find);
router.get('/:id', categoryController.findById);
router.use(middleware.authenticate);
router.use(middleware.authorizeForAdmin);
router.post('/', categoryController.create);
router.put('/:id', categoryController.update);
router.delete('/:id', categoryController.delete);

export const categoryRouter = router;