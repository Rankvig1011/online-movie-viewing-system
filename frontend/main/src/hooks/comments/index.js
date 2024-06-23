import { appContainer } from '@/service/container';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { Bounce, toast } from 'react-toastify';
const { CommentService } = appContainer.cradle;
const getCommentId = CommentService.getCommentByMovieId.bind(CommentService);
export const useCommentDetail = (id) => {
    const { data, isPending, error } = useQuery({
        queryKey: ['comment', id],
        queryFn: async () => {
            return getCommentId(id);
        },
    });
    return {
        commentData: data?.results || [],
        isLoading: isPending,
        isError: error,
    };
};

export const usePostComment = () => {
    const queryClient = useQueryClient();
    const postComment = CommentService.post.bind(CommentService);
    const { data, mutate, isPending } = useMutation({
        mutationFn: postComment,
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
        dataComment: data?.results || [],
        postComment: mutate,
        isPending: isPending,
    };
};
export const useUpdateComment = () => {
    const queryClient = useQueryClient();
    const updateComment = CommentService.patch.bind(CommentService);
    const { data, mutate } = useMutation({
        mutationFn: updateComment,
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
        dataCommentUpdate: data?.results || [],
        updateComment: mutate,
    };
};
export const useDeleteComment = () => {
    const queryClient = useQueryClient();
    const deleteComment = CommentService.delete.bind(CommentService);
    const { mutate, isPending } = useMutation({
        mutationFn: deleteComment,
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
        deleteComment: mutate,
        isPending,
    };
};
