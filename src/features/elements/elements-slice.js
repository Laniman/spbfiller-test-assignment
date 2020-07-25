import { createSlice } from '@reduxjs/toolkit';

export const elementsSlice = createSlice({
  name: 'elements',
  initialState: [],
  reducers: {
    updatePosition: (state, { payload }) => {
      const item = state.find((item) => item.id === payload.id);

      if (item) {
        item.x = payload.x;
        item.y = payload.y;
      }
    },
  },
});

export const { updatePosition } = elementsSlice.actions;

export const selectElements = (state) => state.elements;
