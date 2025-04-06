import React from 'react';
import styles from './style.module.scss';
import { Counter } from 'entities/counter';

const MainPage = React.memo(() => {
  return (
    <div className={styles.testStyle}>
      <Counter />
    </div>
  );
});

MainPage.displayName = 'MainPage';
export default MainPage;
