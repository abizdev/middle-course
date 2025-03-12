import React from 'react';
import { classNames } from 'shared/lib';

import styles from './navbar.module.scss';
import { Button, ButtonTheme } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/auth-by-username';

interface Props {
  className?: string;
}

const Navbar: React.FC<Props> = (props) => {
  const {
    className = '',
  } = props;
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const onToggleModal = React.useCallback(() => {
    setIsModalOpen(prev => !prev);
  }, [])

  return (
    <div className={classNames(styles.navbar, {}, [className])}>

      <div className={classNames(styles.navbarLinks)}>
        <Button
          variant={ButtonTheme.CLEAR_INVERTED}
          onClick={onToggleModal}
        >
          {t('login')}
        </Button>
      </div>

      <LoginModal open={isModalOpen} onClose={onToggleModal} />
    </div>
  );
};

export default Navbar;
