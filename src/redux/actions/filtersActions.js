export const setCategoryFilter = (category) => ({
    type: 'SET_CATEGORY_FILTER',
    payload: category,
  });
  
  export const setPriceRangeFilter = (range) => ({
    type: 'SET_PRICE_RANGE_FILTER',
    payload: range,
  });
  
  export const setSortBy = (sortBy) => ({
    type: 'SET_SORT_BY',
    payload: sortBy,
  });
  