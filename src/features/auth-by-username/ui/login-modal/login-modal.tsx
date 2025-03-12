import React from 'react';
import { Modal } from 'shared/ui';
import { classNames } from 'shared/lib';
import LoginForm from '../login-form/login-form';

import styles from './login-modal.module.scss';

interface Props {
  className?: string;
  open: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<Props> = (props) => {
  const {
    className = '',
    open,
    onClose,
  } = props

  return (
    <Modal className={classNames(styles.loginModal, {}, [className])} open={open} onClose={onClose} lazy>
      <LoginForm />
    </Modal>
  );
};

export default LoginModal;
