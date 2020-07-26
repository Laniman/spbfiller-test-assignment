import { nanoid } from 'nanoid';
import { generateColor, random } from '../../lib';
import {
  maxElementSize,
  minElementSize,
  pageBackgroundColor,
} from '../../app/config';

export const generateElement = ({ pageSize }) => {
  const width = random(minElementSize, maxElementSize);
  const height = random(minElementSize, maxElementSize);

  return {
    id: nanoid(),
    width,
    height,
    backgroundColor: generateColor({ excludeColors: [pageBackgroundColor] }),
    x: random(0, pageSize.width - width),
    y: random(0, pageSize.height - height),
  };
};
