import React from 'react';
import { routeConfig } from 'shared/config';
import { Route, Routes } from 'react-router';
import { PageLoader } from 'widgets/page-loader';

const AppRouter: React.FC = () => {
  return (
    <div className='page-wrapper'>
      <React.Suspense fallback={<PageLoader />}>
        <Routes>
          {Object.values(routeConfig).map(({path, element}) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </React.Suspense>
    </div>
  );
};

export default AppRouter;
