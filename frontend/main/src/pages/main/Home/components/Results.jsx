import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import VideoCard from '../../../../components/Movie/VideoCard';
import { useMovie } from '@/hooks/movie';
const Results = (props) => {
    const { movies } = useMovie();
    const { category } = props;
    const [isArrMovies, setNewArrMovies] = useState([]);
    useEffect(() => {
        if (category) {
            const newArrMovies = movies.filter((movie) => movie.category._id === category);
            setNewArrMovies(newArrMovies);
        } else {
            setNewArrMovies(movies);
        }
    }, [category, movies]);
    return (
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
    );
};

export default Results;
