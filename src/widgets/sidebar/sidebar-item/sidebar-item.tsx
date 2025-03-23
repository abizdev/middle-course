import React from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui';
import { classNames } from 'shared/lib';
import { SidebarItem } from '../model/items';

import styles from './sidebar-item.module.scss';

interface Props {
  item: SidebarItem,
  collapsed: boolean,
}

const SidebarItem: React.FC<Props> = React.memo(({ item, collapsed }) => {
  const { t } = useTranslation()

  return (
    <AppLink
      to={item.path}
      className={classNames(styles.link, { [styles.collapsed]: collapsed }, [])}
      theme={AppLinkTheme.INVERTED}
    >
      {item.icon && <item.icon />}
      <span>{t(item.text)}</span>
    </AppLink>
  );
});

export default SidebarItem;
