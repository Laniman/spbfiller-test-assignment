import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDrag } from 'react-use-gesture';
import { px } from '../../lib';
import { pageSelector } from '../page';
import { updateElementPosition } from './elements-slice';
import { Rectangle } from './rectangle';
import styles from './elements.module.css';

export const DraggableRectangle = React.memo((props) => {
  const { x, y, backgroundColor, width, height, id } = props;

  const nodeRef = React.useRef(null);
  const dispatch = useDispatch();
  const page = useSelector(pageSelector);

  const handleDrag = React.useCallback((mx, my) => {
    if (!nodeRef.current) {
      return;
    }

    nodeRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
  }, []);

  const getDragBounds = () => {
    const maxX = page.width;
    const maxY = page.height;

    const left = -x;
    const right = maxX - x - width;
    const top = -y;
    const bottom = maxY - y - height;

    return { left, right, top, bottom };
  };

  const handleDraggableStop = React.useCallback(
    (mx, my) => {
      if (!nodeRef.current) {
        return;
      }

      const nextX = x + mx;
      const nextY = y + my;

      nodeRef.current.style.top = px(nextY);
      nodeRef.current.style.left = px(nextX);
      nodeRef.current.style.transform = null;

      dispatch(
        updateElementPosition({
          id: nodeRef.current.dataset.id,
          x: nextX,
          y: nextY,
        }),
      );
    },
    [x, y, dispatch],
  );

  const bind = useDrag(
    ({ down, movement: [mx, my] }) => {
      if (down) {
        handleDrag(mx, my);
      } else {
        handleDraggableStop(mx, my);
      }
    },
    { bounds: getDragBounds() },
  );

  return (
    <Rectangle
      id={id}
      x={x}
      y={y}
      className={styles['draggable-rectangle']}
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      ref={nodeRef}
      {...bind()}
    />
  );
});
