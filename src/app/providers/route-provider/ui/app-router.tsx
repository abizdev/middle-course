import React from 'react';
import { routeConfig } from 'shared/config';
import { Route, Routes } from 'react-router';
import { PageLoader } from 'widgets/page-loader';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      {Object.values(routeConfig).map(({path, element}) => (
        <Route key={path} path={path} element={(
          <React.Suspense fallback={<PageLoader />}>
            <div className='page-wrapper'>
              {element}
            </div>
          </React.Suspense>
        )} />
      ))}
    </Routes>
  );
};

export default AppRouter;
