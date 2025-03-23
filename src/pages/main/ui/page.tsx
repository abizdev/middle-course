import React from 'react';
import styles from './style.module.scss';
import { Counter } from 'entities/counter';

const MainPage: React.FC = React.memo(() => {
  return (
    <div className={styles.testStyle}>
      <Counter />
    </div>
  );
});

export default MainPage;
