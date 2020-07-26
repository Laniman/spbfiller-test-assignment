import { configureStore } from '@reduxjs/toolkit';
import { pageSlice } from '../features/page';
import { elementsSlice, generateElement } from '../features/elements';
import { createArray } from '../lib';
import {
  initialPageWidth,
  initialPageHeight,
  initialElementsCount,
} from './config';

const generatedElements = createArray(initialElementsCount, () =>
  generateElement({
    pageSize: {
      width: initialPageWidth,
      height: initialPageHeight,
    },
  }),
);

export const store = configureStore({
  reducer: {
    page: pageSlice.reducer,
    elements: elementsSlice.reducer,
  },
  preloadedState: {
    elements: generatedElements,
  },
});
