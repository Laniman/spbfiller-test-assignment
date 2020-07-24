import { createSlice } from '@reduxjs/toolkit';

export const elementsSlice = createSlice({
  name: 'elements',
  initialState: [],
});

export const selectElements = (state) => state.elements;
