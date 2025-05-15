import { useQuery } from '@tanstack/react-query';
import { fetchCategories } from '../api/fakeStoreApi';

export const useCategories = () => {
  return useQuery({ queryKey: ['categories'], queryFn: fetchCategories });
};
