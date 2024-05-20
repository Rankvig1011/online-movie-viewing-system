import { appContainer } from '@/service/container';
import { useQuery } from '@tanstack/react-query';
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
