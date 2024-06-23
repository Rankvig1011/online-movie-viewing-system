import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMovieDetail } from '@/hooks/movie';
import { Container } from '@mui/material';
import BoxImgActor from './components/BoxImgActor';
import InfoMovie from './components/InfoMovie';
import { useMovie, useEpisodes } from '@/hooks/movie';
import { usePostComment, useUpdateComment } from '@/hooks/comments';
import SliderMovie from '@/components/Movie/SliderMovie';
import BoxEpisode from './components/BoxEpisode';
import CardMedia from './components/CardMedia';
import Comment from './components/Comment';
import Loading from '@/components/Loading';
export const Watch = () => {
    const { id } = useParams();
    const { movies } = useMovie();
    const { episodes } = useEpisodes(id);
    const { movieData } = useMovieDetail(id);
    const { dataComment, postComment, isPending: isCreatPending } = usePostComment();
    const { dataCommentUpdate, updateComment } = useUpdateComment();
    const [moviesCategories, setMoviesCategories] = useState(null);
    const [moviesEpisodes, setMoviesEpisodes] = useState(null);
    const [isEpisodeMovie, setEpisodeMovie] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isPlayMovie, setPlayMovie] = useState(null);
    const resetState = () => {
        setPlayMovie(null);
        setMoviesCategories(null);
        setMoviesEpisodes(null);
        setEpisodeMovie(false);
    };
    useEffect(() => {
        console.log('dataComment::', dataComment);
    }, [dataComment]);
    useEffect(() => {
        console.log('dataCommentUpdate::', dataCommentUpdate);
    }, [dataCommentUpdate]);
    const onSubmitComment = (dataPayload) => {
        setLoading(true);
        postComment(dataPayload);
        setLoading(false);
    };
    const onSubmitReplyComment = (dataPayload) => {
        setLoading(true);
        updateComment({
            id: dataPayload._id,
            data: dataPayload.data,
        });
        setLoading(false);
    };
    useEffect(() => {
        if (movieData) {
            resetState();
            const newMoviesCategories = {
                ...movieData?.category,
                movies: movies.filter((movie) => movie.category._id === movieData?.category?._id),
            };
            setMoviesCategories(newMoviesCategories);
        }
    }, [movieData, movies]);
    useEffect(() => {
        if (episodes) {
            const newArrEpisode = episodes?.sort((a, b) => a.position - b.position);
            setMoviesEpisodes(newArrEpisode);
        }
    }, [episodes]);
    const clickEpisode = () => {
        setEpisodeMovie(true);
    };
    const closeEpisode = () => {
        setEpisodeMovie(false);
    };
    const clickPlay = (value) => {
        if (value) {
            document.documentElement.scrollTo({
                top: 0,
                left: 0,
            });
            setPlayMovie(value);
        }
    };
    const handleNextEpisode = () => {
        const position = Number(isPlayMovie?.position) + 1;
        const newMovie = moviesEpisodes?.find((item) => {
            if (item?.position == position) return item;
        });
        setPlayMovie(newMovie);
    };
    const handlePrevEpisode = () => {
        const position = Number(isPlayMovie?.position) - 1;
        const newMovie = moviesEpisodes?.find((item) => {
            if (item?.position == position) return item;
        });
        setPlayMovie(newMovie);
    };
    return (
        <>
            {loading && <Loading />}
            <main>
                <Container maxWidth="xl" sx={{ mt: 11 }}>
                    {!isPlayMovie ? (
                        <InfoMovie movieData={movieData} handleEpisode={clickEpisode} />
                    ) : (
                        <>
                            <CardMedia
                                isPlayMovie={isPlayMovie}
                                handleClosePlayMovie={() => {
                                    setPlayMovie(null);
                                }}
                                handleNextEpisode={() => {
                                    handleNextEpisode();
                                }}
                                handlePrevEpisode={() => {
                                    handlePrevEpisode();
                                }}
                                lengthMovie={moviesEpisodes?.length}
                            />
                        </>
                    )}
                    {isEpisodeMovie && (
                        <BoxEpisode
                            movieData={moviesEpisodes}
                            handleCloseEpisode={closeEpisode}
                            handlePlayMovie={clickPlay}
                        />
                    )}
                    <BoxImgActor movieData={movieData} />
                    <SliderMovie moviesCategories={moviesCategories} />
                    <Comment
                        idMovie={id}
                        isPending={isCreatPending}
                        onSubmitComment={onSubmitComment}
                        onSubmitReplyComment={onSubmitReplyComment}
                    />
                </Container>
            </main>
        </>
    );
};
