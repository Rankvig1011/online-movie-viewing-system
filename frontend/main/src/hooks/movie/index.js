import { appContainer } from '@/service/container';
import { useQuery } from '@tanstack/react-query';

const { movieService } = appContainer.cradle;

const getMovies = movieService.get.bind(movieService);
export const useMovie = () => {
    const { data, isPending, error } = useQuery({
        queryKey: ['movie'],
        queryFn: getMovies,
    });
    return {
        movies: data?.results || [],
        isLoading: isPending,
        isError: error,
    };
};
const getMoviesId = movieService.getById.bind(movieService);
export const useMovieDetail = (id) => {
    const { data, isPending, error } = useQuery({
        queryKey: ['movie', id],
        queryFn: () => {
            getMoviesId(id);
        },
    });
    return {
        movie: data?.results || [],
        isLoading: isPending,
        isError: error,
    };
};
