import React, { useEffect, useState } from 'react';
import { useCategory } from '@/hooks/category';
import { useMovie } from '@/hooks/movie';
import { Container } from '@mui/material';
import SliderMovie from '@/components/Movie/SliderMovie';

export const Category = () => {
    const { categories } = useCategory();
    const { movies } = useMovie();
    const [moviesCategories, setMoviesCategories] = useState([]);
    useEffect(() => {
        const newMoviesCategories = categories.map((category) => {
            return {
                ...category,
                movies: movies.filter((movie) => movie.category._id === category._id),
            };
        });
        setMoviesCategories(newMoviesCategories);
        console.log('newMoviesCategories', newMoviesCategories);
    }, [categories, movies]);
    return (
        <Container
            maxWidth="xl"
            sx={{
                mt: 12,
            }}
        >
            {moviesCategories.map((category) => (
                <SliderMovie key={category._id} moviesCategories={category} />
            ))}
        </Container>
    );
};
