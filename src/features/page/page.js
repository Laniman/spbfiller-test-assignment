import React from 'react';
import { useSelector } from 'react-redux';
import { selectPage } from './page-slice';
import styles from './page.module.css';
import { pageBackgroundColor } from '../../app/config';

export function Page(props) {
  const { children } = props;
  const page = useSelector(selectPage);

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
}