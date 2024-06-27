import React, { useEffect, useState } from 'react';
import { Box, Container, IconButton, Paper, TextField, Tooltip } from '@mui/material';
import VideoCard from '../../../../components/Movie/VideoCard';
import { useMovie, useSearchImage, useSearchNameMovie } from '@/hooks/movie';
import SearchIcon from '@mui/icons-material/Search';
import ImageIcon from '@mui/icons-material/Image';
import Navbar from './Navbar';
import { useCategory } from '@/hooks/category';
import Loading from '@/components/Loading';
import ResponsiveDialog from './DialogImg';
import { uploadImage } from '@/service/common';
const Results = () => {
    const { movies } = useMovie();
    const { dataSearchMovie, searchView } = useSearchNameMovie();

    const { dataSearchMovieByImage, getMovieForImage } = useSearchImage();
    const { categories } = useCategory();
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState(false);
    const [isImgActor, setImg] = useState(null);
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(false);
    const [isArrMovies, setNewArrMovies] = useState([]);
    const [actors, setActors] = useState([]);
    useEffect(() => {
        if (category) {
            const newArrMovies = movies.filter((movie) => movie.category._id === category);
            setNewArrMovies(newArrMovies);
        } else {
            setNewArrMovies(movies);
        }
    }, [category, movies]);
    useEffect(() => {
        if (query && dataSearchMovie) {
            setNewArrMovies(dataSearchMovie);
        }
    }, [dataSearchMovie, query]);

    useEffect(() => {
        if (isImgActor && dataSearchMovieByImage) {
            const { actors, movies } = dataSearchMovieByImage;
            setNewArrMovies(movies);
            setActors(actors);
            handleClose();
        }
    }, [dataSearchMovieByImage, isImgActor]);

    const handleChangeCategory = (id) => {
        setCategory(id);
    };
    const handleSearch = (event) => {
        setLoading(true);
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const newPayloadLogin = {
            nameMovie: data.get('nameMovie'),
        };
        setQuery(newPayloadLogin);
        searchView(newPayloadLogin);
        setLoading(false);
    };
    const handleSearchByImg = async () => {
        if (isImgActor) {
            const dataImage = await uploadImage([isImgActor], 'search');
            getMovieForImage({ url: dataImage?.secure_url });
        }
    };
    const openSearchByImg = () => {
        handleClickOpen();
    };
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Container maxWidth="xl">
            {loading && <Loading />}
            <Box
                component={Paper}
                maxWidth="xl"
                sx={{
                    overflowX: 'auto',
                    backgroundColor: '#f5f5f5',
                    borderBottom: '1px solid #e0e0e0',
                    borderRadius: '10px',
                    mt: 1,
                    padding: '10px 20px',
                    display: 'flex',
                    justifyContent: 'left',
                    alignContent: 'center',
                }}
            >
                <Box
                    component="form"
                    sx={{
                        display: 'flex',
                        justifyContent: 'left',
                        alignContent: 'center',
                    }}
                    onSubmit={handleSearch}
                >
                    <TextField
                        id="nameMovie"
                        label="Tìm kiếm phim ..."
                        variant="standard"
                        name="nameMovie"
                    />
                    <Tooltip title="Tìm kiếm bằng tên phim">
                        <IconButton
                            type="submit"
                            sx={{
                                width: '50px',
                                height: '50px',
                            }}
                        >
                            <SearchIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
                <Box sx={{ mx: 1 }}>
                    <Tooltip title="Tìm kiếm bằng hình ảnh">
                        <IconButton
                            sx={{
                                width: '50px',
                                height: '50px',
                            }}
                            onClick={openSearchByImg}
                        >
                            <ImageIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
                <Navbar
                    title="Chọn lọc"
                    sections={categories}
                    handleChangeCategory={handleChangeCategory}
                />
            </Box>

            {isImgActor && dataSearchMovieByImage && (
                <Box
                    sx={{
                        mt: 4,
                        fontSize: '20px',
                        fontWeight: 'bold',
                    }}
                >
                    Kết quả dự đoán : {actors.join(', ')}
                </Box>
            )}
            <Container
                maxWidth="xl"
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: 3,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {isArrMovies.map((movie) => (
                    <VideoCard key={movie._id} movie={movie} />
                ))}
            </Container>
            <ResponsiveDialog
                open={open}
                handleClose={handleClose}
                setImg={setImg}
                isImgActor={isImgActor}
                handleSearchByImg={handleSearchByImg}
            />
        </Container>
    );
};

export default Results;
