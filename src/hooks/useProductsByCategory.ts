import { useQuery } from '@tanstack/react-query';
import { fetchProductsByCategory } from '../api/fakeStoreApi';

export const useProductsByCategory = (category: string) => {
  return useQuery({
    queryKey: ['products', category],
    queryFn: () => fetchProductsByCategory(category),
    enabled: !!category,
  });
};