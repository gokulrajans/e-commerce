// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './Slice/pageSlice';

const store = configureStore({
  reducer: {
    page: pageReducer,
  },
});

export default store;
