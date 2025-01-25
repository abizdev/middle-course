import React from 'react';
import { Link, LinkProps } from 'react-router';
import { classNames } from 'shared/lib';
import * as styles from './app-link.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface Props extends LinkProps {
  theme?: AppLinkTheme;
  className?: string;
}

const AppLink: React.FC<Props> = (props) => {
  const {
    theme = AppLinkTheme.PRIMARY,
    className = '',
    to,
    children,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(styles.AppLink, {}, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};

export default AppLink;
