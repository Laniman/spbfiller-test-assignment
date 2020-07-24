import React from 'react';
import { useSelector } from 'react-redux';
import { selectElements } from './elements-slice';
import styles from './elements.module.css';

const Rectangle = (props) => {
  const { width, height, backgroundColor } = props;
  return <div style={{ width, height, backgroundColor }} />;
};

const DraggableRectangle = (props) => {
  const { width, height, backgroundColor, x, y } = props;

  return (
    <div className={styles['draggable-rectangle']} style={{ top: y, left: x }}>
      <Rectangle
        width={width}
        height={height}
        backgroundColor={backgroundColor}
      />
    </div>
  );
};

export const Elements = () => {
  const elements = useSelector(selectElements);

  return elements.map((element) => {
    return (
      <DraggableRectangle
        key={element.id}
        id={element.id}
        width={element.width}
        height={element.height}
        x={element.x}
        y={element.y}
        backgroundColor={element.backgroundColor}
      />
    );
  });
};
