import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Filters from './components/Filters';
import ProductList from './components/ProductList';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Advanced E-commerce Store
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Filters />
          </Grid>
          <Grid item xs={12} md={9}>
            <ProductList />
          </Grid>
        </Grid>
      </Container>
    </Provider>
  );
};

export default App;
