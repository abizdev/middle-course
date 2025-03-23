import React from 'react';
import { Button, ButtonTheme } from 'shared/ui';
import { Theme, useTheme } from 'app/providers/theme-provider';
import { IconMoon, IconSun } from 'shared/assets/icons';

import styles from './theme-switcher.module.scss';

const ThemeSwitcher: React.FC = React.memo(() => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button variant={ButtonTheme.CLEAR} className={styles.themeSwitcher} onClick={toggleTheme}>
      {theme === Theme.DARK ? <IconMoon /> : <IconSun />}
    </Button>
  );
});

export default ThemeSwitcher;
