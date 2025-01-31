import React from 'react';
import { classNames } from 'shared/lib';

import styles from './button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ThemeButton;
  size?: string;
  className?: string;
}

const Button: React.FC<Props> = (props) => {
  const { variant, size, children, className = '', ...otherProps } = props

  return (
    <button
      className={classNames(styles.button, {}, [className, styles[variant]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
