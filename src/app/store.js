import { configureStore } from '@reduxjs/toolkit';
import { pageSlice } from '../features/page';
import { elementsSlice } from '../features/elements';

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const pad = (num, size) => {
  const s = '000000000' + num;
  return s.substr(s.length - size);
};

const generateColor = () => {
  const r = pad(random(0, 255).toString(16), 2);
  const g = pad(random(0, 255).toString(16), 2);
  const b = pad(random(0, 255).toString(16), 2);

  const generatedColor = `#${r}${g}${b}`;
  return generatedColor === '#d8d8d8' ? generateColor() : generatedColor;
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
].concat(Array.from({ length: 4000 }, (_, i) => generateElement(i + 2)));

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
