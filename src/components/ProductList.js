import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/actions/productsActions';
import ProductCard from './ProductCard';
import { Grid } from '@mui/material';

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector(state => state.products);
  const { category, priceRange, sortBy } = useSelector(state => state.filters);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const filteredProducts = products
    .filter(product => product.price >= priceRange[0] && product.price <= priceRange[1])
    .filter(product => (category ? product.category === category : true))
    .sort((a, b) => (sortBy === 'price' ? a.price - b.price : b.rating - a.rating));

  return (
    <Grid container spacing={2}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        filteredProducts.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default ProductList;
