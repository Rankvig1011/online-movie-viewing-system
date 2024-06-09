import { appContainer } from '@/service/container';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Bounce, toast } from 'react-toastify';

const { movieService, episodeService } = appContainer.cradle;

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
        queryFn: async () => {
            return getMoviesId(id);
        },
    });
    return {
        movieData: data?.results || [],
        isLoading: isPending,
        isError: error,
    };
};
export const useUpdateMovie = () => {
    const queryClient = useQueryClient();
    const updateMovie = movieService.patch.bind(movieService);
    const { mutate, isPending } = useMutation({
        mutationFn: updateMovie,
        onSuccess: () => {
            queryClient.invalidateQueries('/movie');
            toast.success('Update successfully!!!', {
                position: 'bottom-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
                transition: Bounce,
            });
        },
    });

    return {
        updateMovie: mutate,
        isPending,
    };
};

export const useDeleteMovie = () => {
    const queryClient = useQueryClient();
    const deleteMovie = movieService.delete.bind(movieService);
    const { mutate, isPending } = useMutation({
        mutationFn: deleteMovie,
        onSuccess: () => {
            queryClient.invalidateQueries('/movie');
            toast.success('Delete successfully!!!', {
                position: 'bottom-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
                transition: Bounce,
            });
        },
    });

    return {
        deleteMovie: mutate,
        isPending,
    };
};
const getEpisodesByMovieId = episodeService.getEpisodeByMovieId.bind(episodeService);
export const useEpisodes = (movieId) => {
    const { data, isPending, error } = useQuery({
        queryKey: ['episode', movieId],
        queryFn: async () => getEpisodesByMovieId(movieId),
    });
    return {
        episodes: data?.results || [],
        isLoading: isPending,
        isError: error,
    };
};
const deleteEpisode = episodeService.delete.bind(episodeService);
export const useDeleteEpisode = () => {
    const queryClient = useQueryClient();
    const { mutate, isPending } = useMutation({
        mutationFn: deleteEpisode,
        onSuccess: () => {
            queryClient.invalidateQueries('/episode');
            toast.success('Delete successfully!!!', {
                position: 'bottom-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
                transition: Bounce,
            });
        },
    });

    return {
        deleteEpisode: mutate,
        isPending,
    };
};

export const useCreateEpisode = () => {
    const queryClient = useQueryClient();
    const createEpisode = episodeService.post.bind(episodeService);
    const { mutate, isPending } = useMutation({
        mutationFn: createEpisode,
        onSuccess: () => {
            queryClient.invalidateQueries('/episode');
            toast.success('Create successfully!!!', {
                position: 'bottom-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
                transition: Bounce,
            });
        },
    });

    return {
        createEpisode: mutate,
        isPending,
    };
};

export const useUpdateEpisode = () => {
    const queryClient = useQueryClient();
    const updateEpisode = episodeService.patch.bind(episodeService);
    const { mutate, isPending } = useMutation({
        mutationFn: updateEpisode,
        onSuccess: () => {
            queryClient.invalidateQueries('/episode');
            toast.success('Update successfully!!!', {
                position: 'bottom-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
                transition: Bounce,
            });
        },
    });

    return {
        updateEpisode: mutate,
        isPending,
    };
};

export const useCreateMovie = () => {
    const queryClient = useQueryClient();
    const createMovie = movieService.post.bind(movieService);
    const { mutate, isPending } = useMutation({
        mutationFn: createMovie,
        onSuccess: () => {
            queryClient.invalidateQueries('/movie');
            toast.success('Create successfully!!!', {
                position: 'bottom-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
                transition: Bounce,
            });
        },
    });

    return {
        createMovie: mutate,
        isPending,
    };
};
