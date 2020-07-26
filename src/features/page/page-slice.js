import { createSlice } from '@reduxjs/toolkit';
import { initialPageHeight, initialPageWidth } from '../../app/config';

export const pageSlice = createSlice({
  name: 'page',
  initialState: {
    width: initialPageWidth,
    height: initialPageHeight,
  },
});

export const selectPage = (state) => state.page;
