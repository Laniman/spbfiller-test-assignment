import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { totalElementsSelector, renewElements } from './elements-slice';
import styles from './elements.module.css';

export const ElementsForm = () => {
  const dispatch = useDispatch();
  const totalElements = useSelector(totalElementsSelector);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const count = Number(formData.get('count'));

    dispatch(renewElements(count));
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <input
        className={styles['form-control']}
        defaultValue={totalElements}
        name="count"
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        autoComplete="off"
      />
      <button className={styles.btn} type="submit">
        Generate
      </button>
    </form>
  );
};
