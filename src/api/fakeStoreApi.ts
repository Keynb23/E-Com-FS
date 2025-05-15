import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

export const fetchProducts = async () => {
  const { data } = await axios.get(`${BASE_URL}/products`);
  return data;
};

export const fetchCategories = async () => {
  const { data } = await axios.get(`${BASE_URL}/products/categories`);
  return data;
};

export const fetchProductsByCategory = async (category: string) => {
  const { data } = await axios.get(`${BASE_URL}/products/category/${category}`);
  return data;
};