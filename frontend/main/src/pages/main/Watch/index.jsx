import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMovieDetail } from '@/hooks/movie';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import BoxImgActor from './components/BoxImgActor';
import InfoMovie from './components/InfoMovie';
import { useMovie, useEpisodes } from '@/hooks/movie';
import SliderMovie from '@/components/Movie/SliderMovie';
import BoxEpisode from './components/BoxEpisode';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
export const Watch = () => {
    const { id } = useParams();
    const { movies } = useMovie();
    const { episodes } = useEpisodes(id);
    const { movieData } = useMovieDetail(id);
    const [moviesCategories, setMoviesCategories] = useState(null);
    const [moviesEpisodes, setMoviesEpisodes] = useState(null);
    const [isEpisodeMovie, setEpisodeMovie] = useState(false);
    const [isPlayMovie, setPlayMovie] = useState(null);
    const resetState = () => {
        setPlayMovie(null);
        setMoviesCategories(null);
        setMoviesEpisodes(null);
        setEpisodeMovie(false);
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
    return (
        <>
            <main>
                <Container maxWidth="xl" sx={{ mt: 11 }}>
                    {!isPlayMovie ? (
                        <InfoMovie movieData={movieData} handleEpisode={clickEpisode} />
                    ) : (
                        <>
                            <Box
                                sx={{
                                    padding: '10px 20px 10px 20px',
                                    textAlign: 'left',
                                    backgroundColor: '#f5f5f5',
                                    borderRadius: '10px',
                                    flexShrink: 0,
                                    borderBottom: '2px solid transparent',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Typography component="h6" variant="h6" color="inherit">
                                    {isPlayMovie?.name}
                                </Typography>
                                <Tooltip title="Đóng">
                                    <IconButton
                                        type="submit"
                                        size="small"
                                        color="secondary"
                                        onClick={() => {
                                            setPlayMovie(null);
                                        }}
                                    >
                                        <CloseIcon />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                            <Card container sx={{ my: 1 }}>
                                <iframe
                                    alt="movie"
                                    width={'100%'}
                                    height={'550px'}
                                    src={'https://www.youtube.com/embed/tgbNymZ7vqY'}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                        {isPlayMovie?.alias}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Tooltip title="Tập trước">
                                        <IconButton type="submit" size="large" color="secondary">
                                            <KeyboardArrowLeftIcon />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Tập tiếp theo">
                                        <IconButton type="submit" size="large" color="secondary">
                                            <KeyboardArrowRightIcon />
                                        </IconButton>
                                    </Tooltip>
                                </CardActions>
                            </Card>
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
                </Container>
            </main>
        </>
    );
};
