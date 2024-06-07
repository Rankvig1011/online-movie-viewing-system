import { appContainer } from '@/service/container';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { Bounce, toast } from 'react-toastify';
const { authRegisterService } = appContainer.cradle;

export const useRegister = () => {
    const queryClient = useQueryClient();
    const register = authRegisterService.post.bind(authRegisterService);
    const { data, mutate, isPending } = useMutation({
        mutationFn: register,
        onSuccess: () => {
            queryClient.invalidateQueries('/');
            toast.success('Register successfully!!!', {
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
            toast.error(error?.data?.message || 'register Fail', {
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
        dataRegister: data?.results || [],
        register: mutate,
        isPending: isPending,
    };
};
