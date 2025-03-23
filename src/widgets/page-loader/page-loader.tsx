import React from 'react';
import styles from './page-loader.module.scss';

const PageLoader: React.FC = React.memo(({}) => {
  return (
    <div className='page-wrapper'>
      <div className={styles.loader} />
    </div>
  )
});

export default PageLoader;
