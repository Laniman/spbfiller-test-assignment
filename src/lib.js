export const random = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const randomHexColor = () =>
  '#000000'.replace(/0/g, () => random(0, 15).toString(16));

export const generateColor = ({ excludeColors = [] } = {}) => {
  const randomColor = () => {
    const generatedColor = randomHexColor();

    const isInvalidColor = excludeColors.includes(
      (color) => color === generatedColor,
    );

    return isInvalidColor ? randomColor() : generatedColor;
  };

  return randomColor();
};

export const createCollection = (length, fn = () => undefined) => {
  const result = {};

  for (let i = 0; i < length; i++) {
    const fnResult = fn(i);
    const { id = i } = fnResult;
    result[id] = fnResult;
  }

  return result;
};

export const sleep = (timeout) =>
  new Promise((resolve) => setTimeout(() => resolve(), timeout));
