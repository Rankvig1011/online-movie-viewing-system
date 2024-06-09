import { Container } from '@/components/layout';
import { ModalCustom } from '@/components/ModalCustom';
import { useMovie } from '@/hooks/movie';
import { ListOfEpisode, ListOfMovie, MovieForm } from '@/section/admin/movie';
import { Button } from '@mui/material';
import React from 'react';

export const MovieAdminPage = () => {
    const { movies } = useMovie();
    const [isOpenAddNewMovie, setIsOpenAddNewMovie] = React.useState(false);
    const [editMovieInfo, setEditMovieInfo] = React.useState(null);
    const [movieActive, setMovieActive] = React.useState(null);
    const handleOpenAddNewMovie = () => {
        setEditMovieInfo(null);
        setIsOpenAddNewMovie(true);
    };
    const handleCloseAddNewMovie = () => setIsOpenAddNewMovie(false);

    React.useEffect(() => {
        if (movies.length > 0 && editMovieInfo) {
            const foundCategory = movies.find((item) => item._id === editMovieInfo._id);
            if (!foundCategory) {
                setEditMovieInfo(null);
            }
        }
    }, [movies, editMovieInfo]);
    const handleOpenEditMovie = (movie) => {
        setEditMovieInfo(movie);
        setIsOpenAddNewMovie(true);
    };

    return (
        <>
            <Container tw="flex-col p-4 gap-2">
                <Container>
                    <Button variant="contained" onClick={handleOpenAddNewMovie}>
                        New Movie
                    </Button>
                </Container>
                <Container tw="gap-2 flex-col xl:flex-row">
                    <Container tw="!w-full xl:w-4/5 ">
                        <ListOfMovie
                            movies={movies}
                            setEditMovieInfo={handleOpenEditMovie}
                            isMovieActive={Boolean(movieActive)}
                            setMovieActive={setMovieActive}
                        />
                    </Container>
                    {movieActive && (
                        <Container tw="border w-full xl:w-1/2 p-2">
                            <ListOfEpisode movie={movieActive} />
                        </Container>
                    )}
                </Container>
            </Container>
            <ModalCustom
                title="Add New Actor"
                opened={isOpenAddNewMovie}
                onClose={handleCloseAddNewMovie}
            >
                <Container tw="w-[865px]">
                    <MovieForm movieInfo={editMovieInfo} onClose={handleCloseAddNewMovie} />
                </Container>
            </ModalCustom>
        </>
    );
};
