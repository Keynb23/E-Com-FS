import React from 'react';
import { useQuery } from '@tanstack/react-query';
import './category.css';

const fetchCategories = async (): Promise<string[]> => {
  const response = await fetch('https://fakestoreapi.com/products/categories');
  if (!response.ok) {
    throw new Error('Failed to fetch categories');
  }
  return response.json();
};

const Category: React.FC = () => {
  const { data: categories, isLoading, error } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  return (
    <div className="category-filter">
      <label htmlFor="category-select" className="category-label">
        Filter by Category:{' '}
      </label>
      <select
        id="category-select"
        value={isLoading ? '' : categories?.[0] || 'all'}
        onChange={(e) => console.log(e.target.value)}
        className="category-select"
      >
        <option value="all">All Categories</option>
        {isLoading ? (
          <option>Loading...</option>
        ) : error ? (
          <option>Error loading categories</option>
        ) : (
          categories?.map((category: string) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))
        )}
      </select>
    </div>
  );
};

export default Category;