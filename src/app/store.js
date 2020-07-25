import { configureStore } from '@reduxjs/toolkit';
import { pageSlice } from '../features/page';
import { elementsSlice } from '../features/elements';

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateColor = () => {
  const r = random(0, 255).toString(16);
  const g = random(0, 255).toString(16);
  const b = random(0, 255).toString(16);

  return `#${r}${g}${b}`;
};

const initialPageState = {
  width: 400,
  height: 400,
};

const generateElement = (id) => {
  const minSize = 40;
  const maxSize = 100;

  const width = random(minSize, maxSize);
  const height = random(minSize, maxSize);

  return {
    id,
    width,
    height,
    backgroundColor: generateColor(),
    x: random(0, initialPageState.width - width),
    y: random(0, initialPageState.height - height),
  };
};

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
].concat(Array.from({ length: 1000 }, (_, i) => generateElement(i + 2)));

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
