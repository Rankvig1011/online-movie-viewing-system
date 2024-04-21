import useSWR from 'swr';
import { appContainer } from '@/service/container';

const { movieService } = appContainer.cradle;

const getMovies = movieService.get.bind(movieService);
export const useMovie = () => {
    const { data, error } = useSWR(`/movie`, getMovies);
    return {
        movies: data,
        isLoading: !error && !data,
        isError: error,
    };
};
