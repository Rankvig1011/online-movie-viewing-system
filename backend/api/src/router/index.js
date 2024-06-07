import { categoryRouter } from './category.router.js';
import { episodeRouter } from './episode.router.js';
import { movieRouter } from './movie.router.js';
import { userRouter } from './user.router.js';
import { authRouter } from './auth.router.js';
import { actorRouter } from './actor.router.js';
import { commentRouter } from './comment.router.js';

import { uploadRouter } from './upload.router.js';
import { streamRouter } from './streaming.router.js';

export const router = (app) => {
    app.use('/api/users', userRouter);
    app.use('/api/category', categoryRouter);
    app.use('/api/episode', episodeRouter);
    app.use('/api/movie', movieRouter);
    app.use('/api/auth', authRouter);
    app.use('/api/actor', actorRouter);
    app.use('/api/upload-image', uploadRouter);
    app.use('/api/v1/streaming', streamRouter);
    app.use('/api/comment', commentRouter);
};
