import React from 'react';

import styles from './login-form.module.scss';
import { classNames } from 'shared/lib';

interface Props {

}

const LoginForm: React.FC<Props> = ({}) => {
  return (
    <div className={classNames(styles.loginForm)}>
      <input type="text" />
      <input type="text" />
      <button>send</button>
    </div>
  );
};

export default LoginForm;
