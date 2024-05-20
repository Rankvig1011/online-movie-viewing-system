import { categoryRouter } from './category.router.js';
import { episodeRouter } from './episode.router.js';
import { movieRouter } from './movie.router.js';
import { userRouter } from './user.router.js';
import { authRouter } from './auth.router.js';
import { actorRouter } from './actor.router.js';

import data from '../dummy/fulldata.json' assert { type: 'json' };
import episodeService from '../service/episode.service.js';

export const router = (app) => {
    app.use('/api/users', userRouter);
    app.use('/api/category', categoryRouter);
    app.use('/api/episode', episodeRouter);
    app.use('/api/movie', movieRouter);
    app.use('/api/auth', authRouter);
    app.use('/api/actor', actorRouter);
    // app.use('/test', async (req, res) => {
    //     const categories = await axios.get("https://tv360.vn/public/v1/composite/film/get-home");
    //     const listOfCategoryIds = [1116,179,185,1122,1128,1131,3736];
    //     const listOfCategories = [];
    //     const listOfCategoriesRequestBody = [];
    //     categories.data.data.forEach((category) => {
    //         if (listOfCategoryIds.includes(category.id)) {
    //             listOfCategories.push(category);
    //             listOfCategoriesRequestBody.push({
    //                 name : category.name,
    //                 description : category.description,
    //                 slug : category.slug,
    //             });
    //         }
    //     });
    //     let listOfMovies = {};
    //     let moviesRequestBody = {};
    //     await Promise.all(listOfCategories.map(async (category) => {
    //         const movies = await axios.get(`https://tv360.vn/_next/data/o_nuTqTgCos4TY_i6hjQt/vi/movies/${category.slug}.json?c=${category.id}&movieCatSlug=${category.slug}`);
    //         listOfMovies[category.slug] = movies.data.pageProps.data.content;
    //         moviesRequestBody[category.slug] = movies.data.pageProps.data.content.map((movie) => {
    //             return {
    //                 name : movie.name,
    //                 description : movie.description,
    //                 slug : movie.slug,
    //                 image : movie.coverImage,
    //                 imageH : movie.coverImageH,
    //                 trailer : movie.coverImage,
    //                 category : category.id,
    //                 totalVote : movie.likeCount,
    //                 totalView : Math.floor(Math.random() * (110000 - 10000) ) + 10000,
    //                 duration : movie.duration,
    //                 durationStr : movie.durationStr,
    //                 //actors : movie.actors,
    //             };
    //         });
    //     }));

    //     let listOfEpisodesOfTheSeries = {};

    //     let actors = {};

    //     await Promise.all(Object.keys(listOfMovies).map(async (categorySlug) => {
    //         await Promise.all(listOfMovies[categorySlug].map(async (movie) => {
    //             const episodes = await axios.get(`https://tv360.vn/_next/data/o_nuTqTgCos4TY_i6hjQt/vi/movie/${movie.slug}.json?m=${movie.id}&col=1122&page=list_cat&movieSlug=${movie.slug}`);
    //             listOfEpisodesOfTheSeries[movie.slug] = episodes.data.pageProps.filmDetail.parts.content.map((episode) => ({
    //                 name : episode.name,
    //                 link : "",
    //                 movie : "",
    //                 duration : episode.duration,
    //                 durationStr : episode.durationStr,
    //                 coverImage : episode.coverImage,
    //                 animationImage : "",
    //                 alias : episode.alias,
    //                 typeVideo : episode.type,
    //                 position : episode.position,

    //             }));
    //             const actor = episodes.data.pageProps.filmDetail.detail.infos.map((actor) => ({
    //                 name : actor.name,
    //                 avatar : actor.avatar || [],
    //                 type : actor.type,
    //             }));
    //             actor.filter((item ) => item.type === 2).forEach((item) => {
    //                 actors[item.name] = {
    //                     name : item.name,
    //                     avatar : item.avatar,
    //                     type : item.type
    //                 };
    //             });
    //             moviesRequestBody[categorySlug].find((movieRequestBody) => movieRequestBody.slug === movie.slug).actors = actor;
    //         }));
    //     }));

    //     res.json({
    //         listOfCategories,
    //         listOfMovies,
    //         listOfCategoriesRequestBody,
    //         moviesRequestBody,
    //         listOfEpisodesOfTheSeries,
    //         actors
    //     });
    // });

    app.use('/api/test', async (req, res) => {
        const {
            listOfCategories,
            listOfMovies,
            listOfCategoriesRequestBody,
            moviesRequestBody,
            listOfEpisodesOfTheSeries,
        } = data;
        // await Promise.all(Object.keys(actors).map( async (actor) => {
        //     await actorService.create(actors[actor]);
        // }))
        // await Promise.all(listOfCategoriesRequestBody.map(async(category) => {
        //     await categoryService.create(category);
        // }))
        // const actorData = await actorService.find();
        // const category = await categoryService.find();
        //const moviesRequestData = {};
        // Object.keys(moviesRequestBody).map((movies) => {
        //     const data = moviesRequestBody[movies].map((movie) => {
        //         const actorsHasId = movie.actors.map((actor) => {
        //             const mapActor = actorData.find((element) => element.name === actor.name);
        //             return  mapActor?._id
        //         });
        //         movie.actors = actorsHasId.filter((actor) => actor !== undefined);
        //         movie.category = category.find((element) => element.slug === movies)?._id;
        //         return movie
        //     });
        //     moviesRequestData[movies] = data;
        // })
        //const movies = await movieService.find();
        // await Promise.all(Object.keys(moviesRequestData).map(async(movies) => {
        //     await Promise.all(moviesRequestData[movies].map(async (movie) => {
        //         try{
        //             const image = await commonService.uploadURL(movie.image, `movie/${movie.slug}`);
        //             console.log("image",image);
        //             const imageH = await commonService.uploadURL(movie.imageH, `movie/${movie.slug}`);
        //             await movieService.create({
        //                 ...movie,
        //                 image : image.secure_url,
        //                 imageH : imageH.secure_url,
        //                 trailer : image.secure_url,
        //             });
        //         }
        //         catch(e){
        //             console.log(e);
        //         }

        //     }))
        // }))
        //const episodeBody = {};
        // Object.keys(listOfEpisodesOfTheSeries).map((movie) => {
        //     const data = listOfEpisodesOfTheSeries[movie].map((episode) => {
        //         return {
        //             ...episode,
        //             movie : movies.find((element) => element.slug === movie)?._id,
        //         }
        //     });
        //     episodeBody[movie] = data;
        // })
        // await Promise.all(Object.keys(episodeBody).map(async(episode) => {
        //     await Promise.all(episodeBody[episode].map(async (item) => {
        //         try{
        //             const coverImage = await commonService.uploadURL(item.coverImage, `episode`);
        //             await episodeService.create({
        //                 ...item,
        //                 coverImage : coverImage.secure_url,
        //             })
        //         }
        //         catch(e){
        //             console.log(e);
        //         }
        //     }))
        // }))
        const episodeByMovieId = await episodeService.findEpisodeByMovieId(
            '6636fd3a1dc6ff44fcbf8344'
        );
        res.json({
            //movies,
            episodeByMovieId,
        });
    });
};
