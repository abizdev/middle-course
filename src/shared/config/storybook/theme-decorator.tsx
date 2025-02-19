// import React from 'react';
import { Decorator } from '@storybook/react';
import { Theme } from 'app/providers/theme-provider';

export const ThemeDecorator = (theme: Theme): Decorator =>  (Story) => (
  <div className={`app ${theme}`}>
    <Story />
  </div>
)
