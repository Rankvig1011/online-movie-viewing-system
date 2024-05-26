import { DialogForm } from '@/components/DialogForm';
import { ModalCustom } from '@/components/ModalCustom';
import { Text } from '@/components/Typhograpy';
import { UnstyledButton } from '@/components/interaction';
import { Container, Grid } from '@/components/layout';
import { useDeleteMovie } from '@/hooks/movie';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Pagination } from '@mui/material';
import React from 'react';
import tw from 'twin.macro';

const TextCustom = tw.span`text-black text-sm font-medium truncate`;

export const ListOfMovie = ({ movies, setEditMovieInfo, isMovieActive, setMovieActive }) => {
    const [movieId, setMovieId] = React.useState();
    const { deleteMovie } = useDeleteMovie();
    const handleDeleteMovie = () => {
        deleteMovie(movieId);
    };

    const itemInPage = React.useRef(10);
    const movieSplitByPage = React.useMemo(() => {
        if (movies.length > 0) {
            return movies.reduce((acc, _, index) => {
                const pageIndex = Math.floor(index / itemInPage.current);
                if (!acc[pageIndex]) {
                    acc[pageIndex] = [];
                }
                acc[pageIndex].push(_);
                return acc;
            }, []);
        }
        return [];
    }, [movies]);

    const [movieData, setMovieData] = React.useState(movieSplitByPage[0]);

    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
        setMovieData(movieSplitByPage[value - 1]);
    };

    React.useEffect(() => {
        setMovieData(movieSplitByPage[0]);
    }, [movieSplitByPage]);

    const listColumns = !isMovieActive
        ? {
              index: tw`col-span-1 text-center`,
              name: tw`col-span-2`,
              image: tw`col-span-1`,
              totalView: tw`col-span-1`,
              totalVote: tw`col-span-1`,
              duration: tw`col-span-1`,
              category: tw`col-span-2`,
              isVip: tw`col-span-1 text-center`,
              actions: tw`col-span-2 text-center`,
          }
        : {
              name: tw`col-span-3`,
              image: tw`col-span-1`,
              duration: tw`col-span-1`,
              category: tw`col-span-2`,
              actors: tw`col-span-3`,
              actions: tw`col-span-2 text-center`,
          };
    return (
        <Container tw="flex-col border">
            <Grid tw="w-full py-4 px-4 border-b">
                {Object.keys(listColumns).map((item, index) => (
                    <Grid.Col key={index} css={listColumns[item]}>
                        <Text tw="font-semibold">{item.toUpperCase()}</Text>
                    </Grid.Col>
                ))}
            </Grid>
            {movieData &&
                movieData.map((movie, index) => (
                    <Grid
                        key={index}
                        tw="w-full p-2 px-4 my-1 bg-white rounded-md duration-200 cursor-pointer border-b hover:(-translate-y-1 shadow-md)"
                    >
                        {!isMovieActive && (
                            <Grid.Col tw="col-span-1 flex items-center justify-center">
                                <TextCustom>{(page - 1) * 10 + (index + 1)}</TextCustom>
                            </Grid.Col>
                        )}
                        <Grid.Col
                            tw="col-span-2 flex items-center"
                            css={[isMovieActive && tw`col-span-3`]}
                        >
                            <TextCustom onClick={() => setMovieActive(movie)}>
                                {movie.name}
                            </TextCustom>
                        </Grid.Col>
                        <Grid.Col tw="col-span-1 flex items-center">
                            <Container>
                                <img src={movie.image} width={'100px'} tw="rounded-md" />
                            </Container>
                        </Grid.Col>
                        {!isMovieActive && (
                            <>
                                <Grid.Col tw="col-span-1 flex items-center">
                                    <TextCustom>{movie.totalView}</TextCustom>
                                </Grid.Col>
                                <Grid.Col tw="col-span-1 flex items-center">
                                    <TextCustom>{movie.totalVote}</TextCustom>
                                </Grid.Col>
                            </>
                        )}
                        <Grid.Col tw="col-span-1 flex items-center">
                            <TextCustom>{movie.durationStr}</TextCustom>
                        </Grid.Col>
                        <Grid.Col tw="col-span-2 flex items-center">
                            <TextCustom>{movie.category.name}</TextCustom>
                        </Grid.Col>
                        {isMovieActive && <Grid.Col tw="col-span-3 flex items-center"></Grid.Col>}
                        {!isMovieActive && (
                            <Grid.Col tw="col-span-1 flex justify-center items-center">
                                <TextCustom>{movie.isVip.toString()}</TextCustom>
                            </Grid.Col>
                        )}
                        <Grid.Col tw="col-span-2 flex items-center">
                            <Container tw="border-l-2 border-gray-100 flex items-center justify-center gap-2 px-2">
                                <UnstyledButton onClick={() => setEditMovieInfo(movie)}>
                                    <div>
                                        <EditIcon size={24} tw="text-primary" />
                                    </div>
                                    <TextCustom tw="text-xs hidden md:block">Edit</TextCustom>
                                </UnstyledButton>
                                <UnstyledButton onClick={() => setMovieId(movie._id)}>
                                    <div>
                                        <DeleteIcon size={20} tw="text-danger" />
                                    </div>
                                    <TextCustom tw="!text-danger text-xs hidden md:block">
                                        Delete
                                    </TextCustom>
                                </UnstyledButton>
                            </Container>
                        </Grid.Col>
                    </Grid>
                ))}
            {movies.length > itemInPage.current && (
                <Container tw="justify-end py-2">
                    <Pagination
                        count={Math.ceil(movies.length / itemInPage.current)}
                        page={page}
                        onChange={handleChange}
                    />
                </Container>
            )}
            <ModalCustom opened={Boolean(movieId)} onClose={() => setMovieId()}>
                <Container tw="w-[500px]">
                    <DialogForm onCancel={() => setMovieId()} onConfirm={handleDeleteMovie} />
                </Container>
            </ModalCustom>
        </Container>
    );
};
