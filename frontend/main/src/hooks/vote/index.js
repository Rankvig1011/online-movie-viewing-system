import { appContainer } from '@/service/container';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { Bounce, toast } from 'react-toastify';
const { voteService } = appContainer.cradle;

export const usePostVote = () => {
    const queryClient = useQueryClient();
    const postVote = voteService.post.bind(voteService);
    const { mutate, isPending } = useMutation({
        mutationFn: postVote,
        onSuccess: () => {
            queryClient.invalidateQueries('/');
            toast.success('Successfully!!!', {
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
        onError: (error) => {
            queryClient.invalidateQueries('/');
            toast.error(error?.data?.message || 'Fail', {
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
        postVote: mutate,
        isPending: isPending,
    };
};
const getVoteId = voteService.getVoteByMovieId.bind(voteService);
export const useVoteDetail = (id) => {
    const { data, isPending, error } = useQuery({
        queryKey: ['vote', id],
        queryFn: async () => {
            return getVoteId(id);
        },
    });
    return {
        voteData: data?.results || [],
        isLoading: isPending,
        isError: error,
    };
};
export const useDeleteVote = () => {
    const queryClient = useQueryClient();
    const deleteVote = voteService.delete.bind(voteService);
    const { mutate, isPending } = useMutation({
        mutationFn: deleteVote,
        onSuccess: () => {
            queryClient.invalidateQueries('/');
            toast.success('Successfully!!!', {
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
        onError: (error) => {
            queryClient.invalidateQueries('/');
            toast.error(error?.data?.message || 'Fail', {
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
        deleteVote: mutate,
        isPending: isPending,
    };
};
