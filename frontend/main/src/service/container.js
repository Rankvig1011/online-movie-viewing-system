import * as awilix from 'awilix';
import { CategoryService } from './category';
import { MovieService } from './movie';
import { EpisodeService } from './episode';
import { CommonService } from './common';
import { ActorService } from './actor';

export const appContainer = awilix.createContainer();

appContainer.register({
    categoryService: awilix.asClass(CategoryService).singleton(),
    movieService: awilix.asClass(MovieService).singleton(),
    episodeService: awilix.asClass(EpisodeService).singleton(),
    commonService: awilix.asClass(CommonService).singleton(),
    actorService: awilix.asClass(ActorService).singleton(),
});
