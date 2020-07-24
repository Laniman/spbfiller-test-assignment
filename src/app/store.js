import { configureStore } from '@reduxjs/toolkit';
import { pageSlice } from '../features/page';
import { elementsSlice } from '../features/elements';

const initialElementsState = [
  {
    id: 0,
    width: 100,
    height: 100,
    x: 10,
    y: 10,
    backgroundColor: '#5FD0E4',
  },
  {
    id: 1,
    width: 40,
    height: 100,
    x: 100,
    y: 200,
    backgroundColor: '#9E5FE4',
  },
].concat(
  Array.from({ length: 1000 }, (_, i) => ({
    id: i + 2,
    width: 40,
    height: 100,
    x: 100,
    y: 200,
    backgroundColor: '#9E5FE4',
  })),
);

export const store = configureStore({
  reducer: {
    page: pageSlice.reducer,
    elements: elementsSlice.reducer,
  },
  preloadedState: {
    page: {
      width: 400,
      height: 400,
    },
    elements: initialElementsState,
  },
});
