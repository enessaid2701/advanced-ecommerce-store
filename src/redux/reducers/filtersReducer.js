const initialState = {
    category: '',
    priceRange: [0, 1000],
    sortBy: 'price',
  };
  
  const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_CATEGORY_FILTER':
        return { ...state, category: action.payload };
      case 'SET_PRICE_RANGE_FILTER':
        return { ...state, priceRange: action.payload };
      case 'SET_SORT_BY':
        return { ...state, sortBy: action.payload };
      default:
        return state;
    }
  };
  
  export default filtersReducer;
  