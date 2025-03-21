import React from 'react';
import { Navbar } from 'widgets/navbar';
import { classNames } from 'shared/lib';
import { AppRouter } from './providers/route-provider';
import { useTheme } from './providers/theme-provider';
import { Sidebar } from 'widgets/sidebar';
import { useAppDispatch } from 'app/providers/store-provider';
import { userActions } from 'entities/user';

const App: React.FC = () => {
  const { theme } = useTheme()
  const dispatch = useAppDispatch();

  React.useEffect(() => {
   dispatch(userActions.initAuthData())
  }, [dispatch])

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
