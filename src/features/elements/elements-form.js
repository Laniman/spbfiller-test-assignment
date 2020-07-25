import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectElements, renewElements } from './elements-slice';
import styles from './elements.module.css';

export const ElementsForm = () => {
  const dispatch = useDispatch();
  const elements = useSelector(selectElements);

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const count = Number(formData.get('count'));

        dispatch(renewElements(count));
      }}
    >
      <input
        defaultValue={elements.length}
        name="count"
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        autoComplete="off"
      />
      <button>GENERATE</button>
    </form>
  );
};
