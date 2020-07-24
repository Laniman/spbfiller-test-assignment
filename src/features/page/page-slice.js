import { createSlice } from '@reduxjs/toolkit';

export const pageSlice = createSlice({
  name: 'page',
  initialState: {
    width: 400,
    height: 400,
  },
});

export const selectPage = (state) => state.page;
