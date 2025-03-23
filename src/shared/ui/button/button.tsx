import React from 'react';
import { classNames } from 'shared/lib';

import styles from './button.module.scss';

export enum ButtonTheme {
  PRIMARY = 'primary',
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
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
  disabled?: boolean;
  children?: React.ReactNode;
}

const Button: React.FC<Props> = React.memo((props) => {
  const {
    variant,
    size = ButtonSize.M,
    children,
    className = '',
    square = false,
    disabled = false,
    ...otherProps
  } = props

  const mods: Record<string, boolean> = {
    [styles.square]: square,
    [styles.disabled]: disabled
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
});

export default Button;
