import React from 'react';
import { useSelector } from 'react-redux';
import { selectElements } from './elements-slice';
import { DraggableRectangle } from './draggable-rectangle';

export const Elements = () => {
  const elements = useSelector(selectElements);

  return Object.values(elements).map((element) => {
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
