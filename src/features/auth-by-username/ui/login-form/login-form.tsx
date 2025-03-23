import React from 'react';

import styles from './login-form.module.scss';
import { classNames, DynamicModuleLoader, ReducersList } from 'shared/lib';
import { Button, ButtonTheme, Input, Typography, TypographyTheme } from 'shared/ui';
import { InputSize } from 'shared/ui/form/input/input';
import { useTranslation } from 'react-i18next';
import { ButtonSize } from 'shared/ui/button/button';
import { useSelector } from 'react-redux';
import { loginActions, loginReducer } from '../../model/login-slice/login-slice';
import {
  selectError,
  selectIsLoading,
  selectPassword,
  selectUsername
} from '../../model/login-selector/login-selector';
import { loginByUsername } from '../../model/login-service/login-by-username/login-by-username';
import { useAppDispatch } from 'app/providers/store-provider';

export interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducersList = {
  'login': loginReducer
}

const LoginForm: React.FC<LoginFormProps> = React.memo(({ className = '' }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const username = useSelector(selectUsername)
  const password = useSelector(selectPassword)
  const isLoading = useSelector(selectIsLoading)
  const error = useSelector(selectError)

  const onChangeUsername = React.useCallback((value: string)=> {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = React.useCallback((value: string)=> {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = React.useCallback(() => {
    dispatch(loginByUsername({ username, password }))
  }, [dispatch, username, password])

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(styles.loginForm, {}, [className])}>
        <Typography title={t('loginForm')} />
        {error && <Typography theme={TypographyTheme.error} text={error} />}
        <Input
          placeholder='login'
          size={InputSize.XL}
          onChange={onChangeUsername}
          value={username}
        />

        <Input
          type='password'
          placeholder='password'
          onChange={onChangePassword}
          value={password}
        />

        <Button
          variant={ButtonTheme.OUTLINE}
          size={ButtonSize.M}
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t('login')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
