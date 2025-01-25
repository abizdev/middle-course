import React from 'react';
import { routeConfig } from 'shared/config';
import { Route, Routes } from 'react-router';

const AppRouter: React.FC = () => {
  return (
    <div className='page-wrapper'>
      <Routes>
        {Object.values(routeConfig).map(({path, element}) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </div>
  );
};

export default AppRouter;
