import * as awilix from 'awilix';
import { CategoryService } from './category';
import { MovieService } from './movie';
import { EpisodeService } from './episode';
import { ActorService } from './actor';
import { WatchService } from './watch';
import { voteService } from './vote';
import { AuthLoginService } from './authLogin';
import { ProfileService } from './profile';
import { AuthRegisterService } from './authRegister';
import { CommentService } from './comment';
export const appContainer = awilix.createContainer();

appContainer.register({
    categoryService: awilix.asClass(CategoryService).singleton(),
    CommentService: awilix.asClass(CommentService).singleton(),
    movieService: awilix.asClass(MovieService).singleton(),
    episodeService: awilix.asClass(EpisodeService).singleton(),
    actorService: awilix.asClass(ActorService).singleton(),
    watchService: awilix.asClass(WatchService).singleton(),
    voteService: awilix.asClass(voteService).singleton(),
    authLoginService: awilix.asClass(AuthLoginService).singleton(),
    profileService: awilix.asClass(ProfileService).singleton(),
    authRegisterService: awilix.asClass(AuthRegisterService).singleton(),
});
