import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { AppLink } from 'shared/ui';

import styles from './navbar.module.scss';

interface Props {
  className?: string;
}

const Navbar: React.FC<Props> = (props) => {
  const {
    className = '',
  } = props;

  const { t } = useTranslation();

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div className={styles.navbarLinks}>
        <AppLink to='/'>{t('main')}</AppLink>
        <AppLink to='/about'>{t('about')}</AppLink>
      </div>
    </div>
  );
};

export default Navbar;
