import React from 'react';
import * as classNames from './style.module.scss'
import { Link } from 'react-router';

const MainPage: React.FC = () => {
  return (
    <div className={classNames.testStyle}>
      main page
      <Link to='/about'>about page</Link>
    </div>
  );
};

export default MainPage;