import actorModel from '../model/actor.model.js';
import GeneralService from './general.service.js';
import CommonService from '../service/common.service.js';
import { createSlug } from '../common/index.js';

class ActorService extends GeneralService {
    constructor() {
        super(actorModel);
    }

    async create(data, files) {
        const { name } = data;
        const image = [];
        try {
            await Promise.all(
                files &&
                    files.map(async (file) => {
                        try {
                            const result = await CommonService.uploadFile(
                                file,
                                `actor/${createSlug(name)}`
                            );
                            image.push(result.secure_url);
                        } catch (e) {
                            throw e;
                        }
                    })
            );
            return super.create({ name, image });
        } catch (e) {
            throw e;
        }
    }

    async update(id, data, files) {
        const { name, image = [] } = data;
        try {
            await Promise.all(
                files &&
                    files.map(async (file) => {
                        try {
                            const result = await CommonService.uploadFile(
                                file,
                                `actor/${createSlug(name)}`
                            );
                            image.push(result.secure_url);
                        } catch (e) {
                            throw e;
                        }
                    })
            );
            return super.update(id, { name, image });
        } catch (e) {
            throw e;
        }
    }
}
export default new ActorService();
