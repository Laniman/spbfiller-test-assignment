import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { pageSlice } from '../features/page';
import { elementsSlice, generateElement } from '../features/elements';
import { createCollection } from '../lib';
import {
  initialPageWidth,
  initialPageHeight,
  initialElementsCount,
} from './config';

const logger = createLogger();

const generatedElements = createCollection(initialElementsCount, () =>
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
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
