import React from 'react';
import { classNames } from 'shared/lib';
import { Button, ThemeButton } from 'shared/ui';
import { ThemeSwitcher } from 'widgets/theme-switcher';
import { LangSwitcher } from 'widgets/lang-switcher';
import { useTranslation } from 'react-i18next';

import styles from './sidebar.module.scss';

interface Props {
  className?: string;
}

const Sidebar: React.FC<Props> = (props) => {
  const { className = '' } = props;
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = React.useState<boolean>(false)
  const toggleCollapse = () => setCollapsed(prev => !prev)

  return (
    <div data-testid='sidebar' className={classNames(styles.sidebar, {[styles.collapsed]: collapsed}, [className])}>
      <Button
        data-testid='sidebar-toggle'
        variant={ThemeButton.CLEAR}
        onClick={toggleCollapse}
      >
        {t('toggleCollapse')}
      </Button>

      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher collapsed={collapsed} />
      </div>
    </div>
  );
};

export default Sidebar;
