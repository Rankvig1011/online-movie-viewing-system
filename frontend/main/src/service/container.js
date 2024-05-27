import * as awilix from 'awilix';
import { CategoryService } from './category';
import { MovieService } from './movie';
import { EpisodeService } from './episode';
import { CommonService } from './common';
import { ActorService } from './actor';
import { WatchService } from './watch';
import { AuthLoginService } from './authLogin';
import { ProfileService } from './profile';
export const appContainer = awilix.createContainer();

appContainer.register({
    categoryService: awilix.asClass(CategoryService).singleton(),
    movieService: awilix.asClass(MovieService).singleton(),
    episodeService: awilix.asClass(EpisodeService).singleton(),
    commonService: awilix.asClass(CommonService).singleton(),
    actorService: awilix.asClass(ActorService).singleton(),
    watchService: awilix.asClass(WatchService).singleton(),
    authLoginService: awilix.asClass(AuthLoginService).singleton(),
    profileService: awilix.asClass(ProfileService).singleton(),
});
