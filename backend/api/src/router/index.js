import { categoryRouter } from "./category.router.js";
import { episodeRouter } from "./episode.router.js";
import { movieRouter } from "./movie.router.js";
import { userRouter } from "./user.router.js";
import { authRouter } from "./auth.router.js";
import axios from "axios";



export const router  = (app) => {
    app.use('/api/users', userRouter);
    app.use('/api/category', categoryRouter);
    app.use('/api/episode', episodeRouter);
    app.use('/api/movie', movieRouter);
    app.use('/api/auth', authRouter);
}
