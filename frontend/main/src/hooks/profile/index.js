import { appContainer } from '@/service/container';
import { useQueryClient, useMutation } from '@tanstack/react-query';

const { profileService } = appContainer.cradle;
export const useProfile = () => {
    const queryClient = useQueryClient();
    const profile = profileService.get.bind(profileService);
    const { data, mutate } = useMutation({
        mutationFn: profile,
        onSuccess: () => {
            queryClient.invalidateQueries('/');
        },
    });
    return {
        dataProfile: data?.results || [],
        profile: mutate,
    };
};
