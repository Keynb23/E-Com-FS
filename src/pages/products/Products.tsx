import React, { useState } from 'react';
import { Category, Product } from '../types/types';
import './Products.css';
import { Rating } from '@smastrom/react-rating';

import { useCategories } from '../hooks/useCategories';
import { useProductsByCategory } from '../hooks/ProductContext';
import { useProducts } from '../hooks/ProductContext';

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { data: categories, isLoading: categoriesLoading } = useCategories();
  const { data: allProducts, isLoading: allProductsLoading } = useProducts();
  const { data: categoryProducts, isLoading: categoryProductsLoading } = useProductsByCategory(selectedCategory || '');

  const products = selectedCategory ? categoryProducts : allProducts;
  const productsLoading = selectedCategory ? categoryProductsLoading : allProductsLoading;
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  if (categoriesLoading || productsLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="products-page">
      <div className="category-dropdown">
        <label htmlFor="category-select">Filter by Category:</label>
        <select
          id="category-select"
          onChange={(e) => handleCategoryChange(e.target.value)}
          value={selectedCategory || ''}
        >
          <option value="">All Categories</option>
          {categories?.map((category: Category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="products-grid">
        {products?.map((product: Product) => (
          <div className="product-card" key={product.id}>
            <h3>{product.title}</h3>
            <h5>{product.category}</h5>
            <p>${product.price}</p>
            <Rating style={{ maxWidth: 150 }} value={product.rating.rate} readOnly />
            <img src={product.image} alt={product.title} className="product-image" />
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;