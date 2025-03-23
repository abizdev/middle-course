import React from 'react';
import { classNames } from 'shared/lib';
import { Button, ButtonTheme } from 'shared/ui';
import { ThemeSwitcher } from 'widgets/theme-switcher';
import { LangSwitcher } from 'widgets/lang-switcher';

import styles from './sidebar.module.scss';
import { ButtonSize } from 'shared/ui/button/button';
import { SidebarItemsList } from '../../model/items';
import SidebarItem from '../../sidebar-item/sidebar-item';

interface Props {
  className?: string;
}

const Sidebar: React.FC<Props> = React.memo((props) => {
  const { className = '' } = props;
  const [collapsed, setCollapsed] = React.useState<boolean>(false)
  const toggleCollapse = () => setCollapsed(prev => !prev)

  return (
    <div data-testid='sidebar' className={classNames(styles.sidebar, {[styles.collapsed]: collapsed}, [className])}>
      <Button
        data-testid='sidebar-toggle'
        variant={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.M}
        onClick={toggleCollapse}
        className={classNames(styles.collapseBtn)}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>

      <div className={styles.sidebar_nav}>
        {SidebarItemsList.map(item => (
            <SidebarItem item={item} collapsed={collapsed} />
        ))}
      </div>

      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher collapsed={collapsed} />
      </div>
    </div>
  );
});

export default Sidebar;
