import React from 'react';

import styles from './login-form.module.scss';
import { classNames } from 'shared/lib';
import { Button, ButtonTheme, Input } from 'shared/ui';
import { InputSize } from 'shared/ui/form/input/input';
import { useTranslation } from 'react-i18next';
import { ButtonSize } from 'shared/ui/button/button';

interface Props {

}

const LoginForm: React.FC<Props> = ({}) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.loginForm)}>
      <Input placeholder='login' size={InputSize.XL} />
      <Input type='password' placeholder='password' />
      <Button variant={ButtonTheme.OUTLINE} size={ButtonSize.M}>{t('login')}</Button>
    </div>
  );
};

export default LoginForm;
