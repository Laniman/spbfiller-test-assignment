import { createSlice, createSelector } from '@reduxjs/toolkit';
import { createCollection } from '../../lib';
import { generateElement } from './generate-element';

export const elementsSlice = createSlice({
  name: 'elements',
  initialState: {},
  reducers: {
    renew: (state, { payload }) => {
      return payload;
    },
    updateElementPosition: (state, { payload }) => {
      const item = state[payload.id];

      if (item) {
        item.x = payload.x;
        item.y = payload.y;
      }
    },
  },
});

export const { updateElementPosition, renew } = elementsSlice.actions;

export const renewElements = (count) => (dispatch, getState) => {
  const { page } = getState();

  const generated = createCollection(count, () =>
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

export const elementsSelector = createSelector(selectElements, (elements) =>
  Object.values(elements),
);

export const totalElementsSelector = createSelector(
  elementsSelector,
  (elements) => elements.length,
);
