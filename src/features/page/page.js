import React from 'react';
import { useSelector } from 'react-redux';
import { pageBackgroundColor } from '../../app/config';
import { pageSelector } from './page-slice';
import styles from './page.module.css';

export const Page = (props) => {
  const { children } = props;
  const page = useSelector(pageSelector);

  return (
    <div
      className={styles.page}
      style={{
        width: `${page.width}px`,
        height: `${page.height}px`,
        backgroundColor: pageBackgroundColor,
      }}
    >
      {children}
    </div>
  );
};
