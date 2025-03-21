import React from 'react';
import { classNames } from 'shared/lib';

import styles from './navbar.module.scss';
import { Button, ButtonTheme } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/auth-by-username';
import { useSelector } from 'react-redux';
import { authData, userActions } from 'entities/user';
import { useAppDispatch } from 'app/providers/store-provider';

interface Props {
  className?: string;
}

const Navbar: React.FC<Props> = (props) => {
  const {
    className = '',
  } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const userAuthData = useSelector(authData)

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const onToggleModal = React.useCallback(() => {
    setIsModalOpen(prev => !prev);
  }, [])

  const onLogout = React.useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (userAuthData) {
    return (
      <div className={classNames(styles.navbar, {}, [className])}>
        <div className={classNames(styles.navbarLinks)}>
          <Button
            variant={ButtonTheme.CLEAR_INVERTED}
            onClick={onLogout}
          >
            {t('logout')}
          </Button>
        </div>
      </div>
    )
  }

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
