import categoryModel from '../model/category.model.js';
import GeneralService from './general.service.js';

class CategoryService extends GeneralService {
    constructor() {
        super(categoryModel);
    }
}
export default new CategoryService();
