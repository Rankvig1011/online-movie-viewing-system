import { appContainer } from '@/service/container';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { Bounce, toast } from 'react-toastify';
const { authLoginService } = appContainer.cradle;

export const useLogin = () => {
    const queryClient = useQueryClient();
    const login = authLoginService.post.bind(authLoginService);
    const { data, mutate, isPending } = useMutation({
        mutationFn: login,
        onSuccess: () => {
            queryClient.invalidateQueries('/');
            toast.success('Login successfully!!!', {
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
            toast.error(error?.data?.message || 'Login Fail', {
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
        dataLogin: data?.results || [],
        login: mutate,
        isPending: isPending,
    };
};
