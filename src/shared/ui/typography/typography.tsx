import React from 'react';
import { classNames } from 'shared/lib';

import styles from './typography.module.scss'

export const TypographyTheme = {
  primary: 'primary',
  error: 'error',
} as const;

export type TypographyTheme = keyof typeof TypographyTheme;

interface Props {
  className?: string;
  text?: string;
  title?: string;
  theme?: TypographyTheme;
}

const Typography: React.FC<Props> = (props) => {
  const {
    className = '',
    text,
    title,
    theme = TypographyTheme.primary
  } = props

  return (
    <div className={classNames(styles.typography, {}, [className, styles[theme]])}>
      {text && <p className={styles.title}>{title}</p>}
      {title && <p className={styles.text}>{text}</p>}
    </div>
  );
};

export default Typography;
