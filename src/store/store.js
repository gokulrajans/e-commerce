// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './Slice/pageSlice';
import cartReducer from './Slice/cartSlice';

const store = configureStore({
  reducer: {
    page: pageReducer,
    cart: cartReducer,
  },
});

export default store;
