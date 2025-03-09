import React from 'react';
import { classNames } from 'shared/lib';

import styles from './navbar.module.scss';
import { Button, ButtonTheme, Modal } from 'shared/ui';
import { useTranslation } from 'react-i18next';

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
      <Button
        variant={ButtonTheme.CLEAR_INVERTED}
        onClick={onToggleModal}
      >
        {t('login')}
      </Button>

      <Modal open={isModalOpen} onClose={onToggleModal}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, veniam.
      </Modal>
    </div>
  );
};

export default Navbar;
