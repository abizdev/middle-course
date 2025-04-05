import React from 'react';
import { RoutePath } from 'shared/config';
import { IconHome, IconList } from 'shared/assets/icons';

export interface SidebarItem {
  path: string;
  text: string;
  icon?: React.ComponentType;
}

export const SidebarItemsList: SidebarItem[] = [
  {
    path: RoutePath.main,
    text: 'main',
    icon: IconHome
  },
  {
    path: RoutePath.about,
    text: 'about',
    icon: IconList
  },
  {
    path: RoutePath.profile,
    text: 'profile',
    icon: IconList
  }
];
