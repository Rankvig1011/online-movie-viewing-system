import { appContainer } from '@/service/container';
import { useQuery } from '@tanstack/react-query';
const { watchService } = appContainer.cradle;

const getWatch = watchService.get.bind(watchService);
export const useWatch = (id) => {
    const { data, isPending, error } = useQuery({
        queryKey: [`watch/${id}`],
        queryFn: getWatch,
    });
    return {
        watch: data?.results || [],
        isLoading: isPending,
        isError: error,
    };
};
