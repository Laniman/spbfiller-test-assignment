import { configureStore } from '@reduxjs/toolkit';
import { pageSlice } from '../features/page';
import { elementsSlice, generateElement } from '../features/elements';

const initialPageState = {
  width: 400,
  height: 400,
};

const initialElementsState = Array.from({ length: 100 }, () =>
  generateElement({
    pageSize: {
      width: initialPageState.width,
      height: initialPageState.height,
    },
  }),
);

export const store = configureStore({
  reducer: {
    page: pageSlice.reducer,
    elements: elementsSlice.reducer,
  },
  preloadedState: {
    page: initialPageState,
    elements: initialElementsState,
  },
});
