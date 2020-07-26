import React from 'react';

export const Rectangle = React.memo((props) => {
  const { width, height, backgroundColor } = props;
  return <div style={{ width, height, backgroundColor }} />;
});
