import React from 'react';
import { classNames } from 'shared/lib';

import styles from './navbar.module.scss';

interface Props {
  className?: string;
}

const Navbar: React.FC<Props> = (props) => {
  const {
    className = '',
  } = props;

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div className={styles.navbarLinks}>
      </div>
    </div>
  );
};

export default Navbar;
