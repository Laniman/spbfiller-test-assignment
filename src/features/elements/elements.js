import React from 'react';
import Draggable from 'react-draggable';
import { useSelector, useDispatch } from 'react-redux';
import styles from './elements.module.css';
import { selectElements, updatePosition } from './elements-slice';

const Rectangle = React.memo((props) => {
  const { width, height, backgroundColor } = props;
  return <div style={{ width, height, backgroundColor }} />;
});

const DraggableRectangle = React.memo(
  (props) => {
    const { id, width, height, backgroundColor, x, y } = props;
    const nodeRef = React.useRef(null);
    const dispatch = useDispatch();

    const handleDraggableStop = React.useCallback(
      (_, { node, x, y }) => {
        dispatch(updatePosition({ id: Number(node.dataset.id), x, y }));
      },
      [dispatch],
    );

    const draggableChild = (
      <div className={styles['draggable-rectangle']} ref={nodeRef} data-id={id}>
        <Rectangle
          width={width}
          height={height}
          backgroundColor={backgroundColor}
        />
      </div>
    );

    return (
      <Draggable
        bounds={'parent'}
        defaultPosition={{ x, y }}
        nodeRef={nodeRef}
        onStop={handleDraggableStop}
      >
        {draggableChild}
      </Draggable>
    );
  },
  () => true,
);

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
