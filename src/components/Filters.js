import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryFilter, setPriceRangeFilter, setSortBy } from '../redux/actions/filtersActions';
import { Box, Slider, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const Filters = () => {
  const dispatch = useDispatch();
  const { category, priceRange, sortBy } = useSelector(state => state.filters);

  const handleCategoryChange = (e) => {
    dispatch(setCategoryFilter(e.target.value));
  };

  const handlePriceChange = (e, newValue) => {
    dispatch(setPriceRangeFilter(newValue));
  };

  const handleSortChange = (e) => {
    dispatch(setSortBy(e.target.value));
  };

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel>Category</InputLabel>
        <Select value={category} onChange={handleCategoryChange}>
          <MenuItem value="">All</MenuItem>
          <MenuItem value="electronics">Electronics</MenuItem>
          <MenuItem value="jewelery">Jewelery</MenuItem>
          <MenuItem value="men's clothing">Men's Clothing</MenuItem>
          <MenuItem value="women's clothing">Women's Clothing</MenuItem>
        </Select>
      </FormControl>

      <Box mt={2}>
        <InputLabel>Price Range</InputLabel>
        <Slider value={priceRange} onChange={handlePriceChange} min={0} max={1000} />
      </Box>

      <Box mt={2}>
        <FormControl fullWidth>
          <InputLabel>Sort By</InputLabel>
          <Select value={sortBy} onChange={handleSortChange}>
            <MenuItem value="price">Price</MenuItem>
            <MenuItem value="rating">Rating</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Filters;
