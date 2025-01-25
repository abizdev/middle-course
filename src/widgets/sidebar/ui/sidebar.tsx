import React from 'react';
import { Button, ThemeButton } from 'shared/ui';
import { classNames } from 'shared/lib';
import * as styles from './sidebar.module.scss';

interface Props {
  className?: string;
}

const Sidebar: React.FC<Props> = (props) => {
  const { className = '' } = props;

  const [collapsed, setCollapsed] = React.useState<boolean>(false)
  const toggleCollapse = () => setCollapsed(prev => !prev)

  return (
    <div className={classNames(styles.Sidebar, {[styles.collapsed]: collapsed}, [className])}>
      <Button variant={ThemeButton.CLEAR} onClick={toggleCollapse}>toggle collapse</Button>
      <div className={styles.switchers}>
        {/*<ThemeSwitcher />*/}
        {/*<LangSwitcher />*/}
      </div>
    </div>
  );
};

export default Sidebar;
