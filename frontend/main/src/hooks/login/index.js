import { appContainer } from '@/service/container';
import { useQueryClient, useMutation } from '@tanstack/react-query';

const { authLoginService } = appContainer.cradle;

export const useLogin = () => {
    const queryClient = useQueryClient();
    const login = authLoginService.post.bind(authLoginService);
    const { data, mutate, isPending } = useMutation({
        mutationFn: login,
        onSuccess: () => {
            queryClient.invalidateQueries('/');
        },
    });
    return {
        dataLogin: data?.results || [],
        login: mutate,
        isPending: isPending,
    };
};
export const useRegister = () => {
    const queryClient = useQueryClient();
    const register = authLoginService.post.bind(authLoginService);
    const { data, mutate, isPending } = useMutation({
        mutationFn: register,
        onSuccess: () => {
            queryClient.invalidateQueries('/');
        },
    });
    return {
        dataRegister: data?.results || [],
        register: mutate,
        isPending: isPending,
    };
};
