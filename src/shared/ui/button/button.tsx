import React from 'react';
import { classNames } from 'shared/lib';

import styles from './button.module.scss';

export enum ButtonTheme {
  PRIMARY = 'primary',
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'sizeM',
  L = 'sizeL',
  XL = 'sizeXl',
}

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonTheme;
  size?: ButtonSize;
  className?: string;
  square?: boolean;
}

const Button: React.FC<Props> = (props) => {
  const { variant, size = ButtonSize.M, children, className = '', square = false, ...otherProps } = props

  const mods: Record<string, boolean> = {
     [styles.square]: square
  }

  const additionals: string[] = [className, styles[variant], styles[size]];

  return (
    <button
      className={classNames(styles.button, mods, additionals)}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
