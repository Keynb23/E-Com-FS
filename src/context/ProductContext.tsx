import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import type { Product, Category } from "../types/types.ts";


const apiClient = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export const useProducts = () =>
  useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async (): Promise<Product[]> => {
      const { data } = await apiClient.get<Product[]>("/products");
      return data;
    },
  });

export const useCategories = () =>
  useQuery<string[]>({
    queryKey: ["categories"],
    queryFn: async (): Promise<string[]> => {
      const { data } = await apiClient.get<string[]>("/products/categories");
      return data;
    },
  });

export const useProductsByCategory = (category: Category) =>
  useQuery<Product[]>({
    queryKey: ["products", category],
    queryFn: async (): Promise<Product[]> => {
      const { data } = await apiClient.get<Product[]>(`/products/category/${category}`);
      return data;
    },
    enabled: !!category,
  });
