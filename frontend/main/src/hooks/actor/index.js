import { appContainer } from '@/service/container';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Bounce, toast } from 'react-toastify';

const { actorService } = appContainer.cradle;

const getActors = actorService.get.bind(actorService);
export const useActor = () => {
    const { data, isPending, error } = useQuery({
        queryKey: ['/actor'],
        queryFn: getActors,
    });
    return {
        actors: data?.results || [],
        isLoading: isPending,
        isError: error,
    };
};

export const useUpdateActor = () => {
    const queryClient = useQueryClient();
    const updateActor = actorService.patch.bind(actorService);
    const { mutate, isPending } = useMutation({
        mutationFn: updateActor,
        onSuccess: () => {
            queryClient.invalidateQueries('/actor');
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
        updateActor: mutate,
        isPending,
    };
};

export const useCreateActor = () => {
    const queryClient = useQueryClient();
    const createActor = actorService.post.bind(actorService);
    const { mutate, isPending } = useMutation({
        mutationFn: createActor,
        onSuccess: () => {
            queryClient.invalidateQueries('/actor');
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
        createActor: mutate,
        isPending,
    };
};

export const useDeleteActor = () => {
    const queryClient = useQueryClient();
    const deleteActor = actorService.delete.bind(actorService);
    const { mutate, isPending } = useMutation({
        mutationFn: deleteActor,
        onSuccess: () => {
            queryClient.invalidateQueries('/actor');
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
        deleteActor: mutate,
        isPending,
    };
};
