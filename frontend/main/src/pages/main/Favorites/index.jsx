import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import VideoCard from '@/components/Movie/VideoCard';
import { useMovieFavorites } from '@/hooks/vote';
const Favorites = () => {
    const [isArrMovies, setNewArrMovies] = useState([]);
    const profileLocal = localStorage.getItem('profile');
    const profileLocalParse = JSON.parse(profileLocal);
    const { movieFavorites } = useMovieFavorites(profileLocalParse?._id);
    useEffect(() => {
        setNewArrMovies(movieFavorites);
    }, [movieFavorites]);
    return (
        <>
            <main>
                <Container
                    maxWidth="xl"
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        gap: 3,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: '30px',
                    }}
                >
                    {isArrMovies.map((movie) => (
                        <VideoCard key={movie._id} movie={movie} />
                    ))}
                </Container>
            </main>
        </>
    );
};

export default Favorites;
