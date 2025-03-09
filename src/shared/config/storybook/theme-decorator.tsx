// import React from 'react';
import { Decorator } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/theme-provider';

export const ThemeDecorator = (theme: Theme): Decorator =>  (Story) => (
  <ThemeProvider>
    <div className={`app ${theme}`}>
      <Story />
    </div>s
  </ThemeProvider>
)
