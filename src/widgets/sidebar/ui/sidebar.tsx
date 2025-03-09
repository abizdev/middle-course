import React from 'react';
import { classNames } from 'shared/lib';
import { AppLink, AppLinkTheme, Button, ButtonTheme } from 'shared/ui';
import { ThemeSwitcher } from 'widgets/theme-switcher';
import { LangSwitcher } from 'widgets/lang-switcher';

import styles from './sidebar.module.scss';
import { ButtonSize } from 'shared/ui/button/button';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config';
import { IconHome, IconList } from 'shared/assets/icons';

interface Props {
  className?: string;
}

const Sidebar: React.FC<Props> = (props) => {
  const { className = '' } = props;
  const { t } = useTranslation()
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
        <AppLink
          to={RoutePath.main}
          className={classNames(styles.item, {}, [styles.link])}
          theme={AppLinkTheme.INVERTED}
        >
          <IconHome className={styles.icon} />
          <span>{t('main')}</span>
        </AppLink>

        <AppLink
          to={RoutePath.about}
          className={classNames(styles.item, {}, [styles.link])}
          theme={AppLinkTheme.INVERTED}
        >
          <IconList className={styles.icon} />
          <span>{t('about')}</span>
        </AppLink>
      </div>

      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher collapsed={collapsed} />
      </div>
    </div>
  );
};

export default Sidebar;
