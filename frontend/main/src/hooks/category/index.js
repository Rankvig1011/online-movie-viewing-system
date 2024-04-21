import useSWR from 'swr';
import { appContainer } from '@/service/container';

const { categoryService } = appContainer.cradle;

const getCategories = categoryService.get.bind(categoryService);
export const useCategory = () => {
    const { data, error } = useSWR(`/category`, getCategories);
    return {
        categories: data,
        isLoading: !error && !data,
        isError: error,
    };
};
