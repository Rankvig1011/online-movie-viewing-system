import { appContainer } from '@/service/container';
import { useQueryClient, useMutation } from '@tanstack/react-query';

const { authRegisterService } = appContainer.cradle;

export const useRegister = () => {
    const queryClient = useQueryClient();
    const register = authRegisterService.post.bind(authRegisterService);
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
