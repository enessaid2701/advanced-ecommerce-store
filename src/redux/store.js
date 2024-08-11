import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './reducers/productsReducer';
import filtersReducer from './reducers/filtersReducer';
import { thunk } from 'redux-thunk'; // thunk'ı named export olarak import ediyoruz

const store = configureStore({
  reducer: {
    products: productsReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
