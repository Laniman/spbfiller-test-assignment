import React from 'react';
import Draggable from 'react-draggable';
import { useDispatch } from 'react-redux';
import { updateElementPosition } from './elements-slice';
import { Rectangle } from './rectangle';
import styles from './elements.module.css';

export const DraggableRectangle = React.memo((props) => {
  const { id, width, height, backgroundColor, x, y } = props;

  const nodeRef = React.useRef(null);
  const dispatch = useDispatch();

  const handleDraggableStop = React.useCallback(
    (_, { node, x, y }) => {
      dispatch(updateElementPosition({ id: node.dataset.id, x, y }));
    },
    [dispatch],
  );

  return (
    <Draggable
      enableUserSelectHack={false}
      bounds={'parent'}
      defaultPosition={{ x, y }}
      nodeRef={nodeRef}
      onStop={handleDraggableStop}
    >
      <div className={styles['draggable-rectangle']} ref={nodeRef} data-id={id}>
        <Rectangle
          width={width}
          height={height}
          backgroundColor={backgroundColor}
        />
      </div>
    </Draggable>
  );
});
