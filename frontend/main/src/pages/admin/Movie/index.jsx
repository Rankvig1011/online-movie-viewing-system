import { Container } from '@/components/layout';
import { ModalCustom } from '@/components/ModalCustom';
import { useMovie } from '@/hooks/movie';
import { ListOfEpisode, ListOfMovie } from '@/section/admin/movie';
import { Button } from '@mui/material';
import React from 'react';
import tw from 'twin.macro';

export const MovieAdminPage = () => {
    const { movies } = useMovie();
    const [isOpenAddNewMovie, setIsOpenAddNewMovie] = React.useState(false);
    const [editMovieInfo, setEditMovieInfo] = React.useState();
    const [movieActive, setMovieActive] = React.useState(null);
    const handleOpenAddNewMovie = () => setIsOpenAddNewMovie(true);
    const handleCloseAddNewMovie = () => setIsOpenAddNewMovie(false);

    React.useEffect(() => {
        if (movies.length > 0 && editMovieInfo) {
            const foundCategory = movies.find((item) => item._id === editMovieInfo._id);
            if (!foundCategory) {
                setEditMovieInfo();
            }
        }
    }, [movies, editMovieInfo]);

    return (
        <>
            <Container tw="flex-col p-4 gap-2">
                <Container>
                    <Button variant="contained" onClick={handleOpenAddNewMovie}>
                        New Category
                    </Button>
                </Container>
                <Container tw="gap-2 flex-col xl:flex-row">
                    <Container tw="w-full xl:w-4/5" css={[!editMovieInfo && tw`!w-full`]}>
                        <ListOfMovie
                            movies={movies}
                            setEditMovieInfo={setEditMovieInfo}
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
                <Container tw="w-[1000px]">
                    {/* <MovieForm /> */}
                    12312
                </Container>
            </ModalCustom>
        </>
    );
};
