import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

export const fetchProducts = () => {
  return axios.get(`${BASE_URL}/products`);
};

export const fetchCategories = () => {
  return axios.get(`${BASE_URL}/products/categories`);
};
