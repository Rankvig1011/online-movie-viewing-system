import React from 'react';
import { useParams } from 'react-router-dom';
import { useMovieDetail } from '@/hooks/movie';
export const Watch = () => {
    const { id } = useParams();
    const { watch, isLoading, isError } = useMovieDetail(id);
    console.log(watch, isLoading, isError);
    return <div>Watch</div>;
};
