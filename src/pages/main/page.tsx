import React from 'react';
import * as classNames from './style.module.scss'
import { Button, ThemeButton } from 'shared/ui';

const MainPage: React.FC = () => {
  return (
    <div className={classNames.testStyle}>
      main page
      <Button variant={ThemeButton.CLEAR}>Test button</Button>
    </div>
  );
};

export default MainPage;
