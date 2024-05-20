import { appContainer } from '@/service/container';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Bounce, toast } from 'react-toastify';

const { categoryService } = appContainer.cradle;

const getCategories = categoryService.get.bind(categoryService);
export const useCategory = () => {
    const { data, isPending, error } = useQuery({
        queryKey: ['category'],
        queryFn: getCategories,
    });
    return {
        categories: data?.results || [],
        isLoading: isPending,
        isError: error,
    };
};

export const useUpdateCategory = () => {
    const queryClient = useQueryClient();
    const updateCategory = categoryService.patch.bind(categoryService);
    const { mutate, isPending } = useMutation({
        mutationFn: updateCategory,
        onSuccess: () => {
            queryClient.invalidateQueries('/category');
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
        updateCategory: mutate,
        isPending,
    };
};

export const useCreateCategory = () => {
    const queryClient = useQueryClient();
    const createCategory = categoryService.post.bind(categoryService);
    const { mutate, isPending } = useMutation({
        mutationFn: createCategory,
        onSuccess: () => {
            queryClient.invalidateQueries('/category');
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
        createCategory: mutate,
        isPending,
    };
};

export const useDeleteCategory = () => {
    const queryClient = useQueryClient();
    const deleteCategory = categoryService.delete.bind(categoryService);
    const { mutate, isPending } = useMutation({
        mutationFn: deleteCategory,
        onSuccess: () => {
            queryClient.invalidateQueries('/category');
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
        deleteCategory: mutate,
        isPending,
    };
};
