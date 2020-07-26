import { createSlice } from '@reduxjs/toolkit';
import { createArray } from '../../lib';
import { generateElement } from './generate-element';

export const elementsSlice = createSlice({
  name: 'elements',
  initialState: [],
  reducers: {
    renew: (state, { payload }) => {
      return payload;
    },
    updateElementPosition: (state, { payload }) => {
      const item = state.find((item) => item.id === payload.id);

      if (item) {
        item.x = payload.x;
        item.y = payload.y;
      }
    },
  },
});

export const { updateElementPosition, renew } = elementsSlice.actions;

export const renewElements = (count) => async (dispatch, getState) => {
  const { page } = getState();

  const generated = createArray(count, () =>
    generateElement({
      pageSize: {
        width: page.width,
        height: page.height,
      },
    }),
  );

  return dispatch(renew(generated));
};

export const selectElements = (state) => state.elements;
