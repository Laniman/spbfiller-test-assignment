export const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const pad = (num, size) => {
  const s = '000000000' + num;
  return s.substr(s.length - size);
};

export const generateColor = ({ excludeColors = [] } = {}) => {
  const randomColor = () => {
    const r = pad(random(0, 255).toString(16), 2);
    const g = pad(random(0, 255).toString(16), 2);
    const b = pad(random(0, 255).toString(16), 2);

    const generatedColor = `#${r}${g}${b}`;

    const isInvalidColor = excludeColors.includes(
      (color) => color === generatedColor,
    );

    return isInvalidColor ? randomColor() : generatedColor;
  };

  return randomColor();
};
