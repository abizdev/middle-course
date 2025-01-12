import React from 'react';
import { AppRouter } from './providers/route-provider';
import { useTheme } from './providers/theme-provider';
import { classNames } from 'shared/lib';
import './styles/index.scss'
import './styles/main.css'

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>toggleTheme</button>
      <AppRouter />
    </div>
  );
};

export default App;