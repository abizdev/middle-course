import React, { InputHTMLAttributes } from 'react';
import { classNames } from 'shared/lib';

import styles from './input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'size'>

export enum InputSize {
  M = 'sizeM',
  L = 'sizeL',
  XL = 'sizeXl',
}

interface Props extends HTMLInputProps {
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: string;
  size?: InputSize;
  error?: boolean;
}

const Input = React.memo((props: Props) => {
  const {
    type = 'text',
    size = InputSize.M,
    className = '',
    placeholder = '',
    value,
    error = false,
    onChange
  } = props;

  const mods: Record<string, boolean> = {
    [styles.error]: error
  };

  const additionals: string[] = [className, styles[size]];

  const onChangeEvent = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onChange?.(event.target.value);
  };

  return (
    <div className={classNames(styles.inputWrapper, mods, additionals)}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChangeEvent}
      />
    </div>
  );
});

Input.displayName = 'Input';
export default Input;
