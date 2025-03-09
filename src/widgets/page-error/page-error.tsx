import React from 'react';
import { AppLink, Button, ButtonTheme } from 'shared/ui';

import styles from './page-error.module.scss';

const PageError: React.FC = ({}) => {
  return (
    <div className={styles.pageError}>
      <h1>Something went wrong</h1>
      <Button variant={ButtonTheme.CLEAR}>
        <AppLink to='/'>Go to main page</AppLink>
      </Button>
    </div>
  );
};

export default PageError;
