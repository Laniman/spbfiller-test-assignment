import React from 'react';

const Rectangle = (props, ref) => {
  const {
    id,
    width,
    height,
    backgroundColor,
    onMouseDown,
    onTouchStart,
    className,
    x,
    y,
  } = props;

  return (
    <div
      ref={ref}
      className={className}
      data-id={id}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      style={{
        width,
        height,
        backgroundColor,
        left: x,
        top: y,
        position: 'absolute',
      }}
    />
  );
};

const withRef = React.forwardRef(Rectangle);
const withMemo = React.memo(withRef);

export { withMemo as Rectangle };
