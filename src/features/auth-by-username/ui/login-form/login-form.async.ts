import React from 'react';
import { LoginFormProps } from './login-form';

const LoginFormAsync = React.lazy<React.FC<LoginFormProps>>(() => import('./login-form'));

export default LoginFormAsync;
