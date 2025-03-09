import React from 'react';
import { Navbar } from 'widgets/navbar';
import { classNames } from 'shared/lib';
import { AppRouter } from './providers/route-provider';
import { useTheme } from './providers/theme-provider';
import { Sidebar } from 'widgets/sidebar';

const App: React.FC = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <React.Suspense fallback={''}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </React.Suspense>
    </div>
  );
};

export default App;
