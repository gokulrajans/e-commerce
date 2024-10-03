// src/store/pageSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedPage: '/',
};

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.selectedPage = action.payload;
    },
  },
});

export const { setPage } = pageSlice.actions;
export default pageSlice.reducer;
