import { GenaralService } from './general';

export class ProfileService extends GenaralService {
    constructor() {
        super('auth/profile');
    }
}
