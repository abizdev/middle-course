import type { Preview } from '@storybook/react';
import { Theme } from '../../src/app/providers/theme-provider';
import { RouterDecorator, StyleDecorator, ThemeDecorator } from '../../src/shared/config';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    StyleDecorator,
    RouterDecorator,
    ThemeDecorator(Theme.LIGHT),
  ]
};

export default preview;
