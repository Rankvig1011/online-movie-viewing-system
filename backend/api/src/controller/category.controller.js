
import categoryService from '../service/category.service.js';
import GeneralController from './general.controller.js'

class CategoryController extends GeneralController {
    constructor() {
        super(categoryService);
    }
}
export default new CategoryController();