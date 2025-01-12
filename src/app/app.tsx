import React from 'react';
import { AppRouter } from './providers/route-provider';
import { useTheme } from './providers/theme-provider';
import { classNames } from 'shared/lib';
import IconMoon from 'shared/assets/icons/icon-moon.svg'
import IconSun from 'shared/assets/icons/icon-sun.svg'
import './styles/index.scss'

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>toggleTheme</button>
      <IconMoon />
      <IconSun />
      <AppRouter />
    </div>
  );
};

export default App;