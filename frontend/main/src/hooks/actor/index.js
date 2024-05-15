import { appContainer } from '@/service/container';
import { useQuery } from '@tanstack/react-query';

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
