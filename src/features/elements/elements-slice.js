import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';
import { generateColor, random } from '../../lib';

export const generateElement = ({ pageSize }) => {
  const minSize = 40;
  const maxSize = 100;
  const pageBgColor = '#d8d8d8';

  const width = random(minSize, maxSize);
  const height = random(minSize, maxSize);

  return {
    id: nanoid(),
    width,
    height,
    backgroundColor: generateColor({ excludeColors: [pageBgColor] }),
    x: random(0, pageSize.width - width),
    y: random(0, pageSize.height - height),
  };
};

export const elementsSlice = createSlice({
  name: 'elements',
  initialState: [],
  reducers: {
    renew: (state, { payload }) => {
      return payload;
    },
    updatePosition: (state, { payload }) => {
      const item = state.find((item) => item.id === payload.id);

      if (item) {
        item.x = payload.x;
        item.y = payload.y;
      }
    },
  },
});

export const { updatePosition, renew } = elementsSlice.actions;

export const renewElements = (count) => (dispatch, getState) => {
  const { page } = getState();

  const generated = Array.from({ length: count }, () =>
    generateElement({
      pageSize: {
        width: page.width,
        height: page.height,
      },
    }),
  );

  dispatch(renew(generated));
};

export const selectElements = (state) => state.elements;
