import type { Meta, StoryObj } from '@storybook/react';

import Typography, { TypographyTheme } from './typography';
import { ThemeDecorator } from 'shared/config';
import { Theme } from 'app/providers/theme-provider';

const meta = {
  title: 'shared/Typography',
  component: Typography,
  tags: ['autodocs'],
  args: {
    title: 'Lorem ipsum dolor',
    text: 'Sit amet, consectetur adipisicing elit. Ad, possimus.'
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TypographyPrimary: Story = {};
export const TypographyDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
};
export const TypographyError: Story = {
  args: {
    theme: TypographyTheme.error
  },
};
export const TypographyErrorDark: Story = {
  args: {
    theme: TypographyTheme.error
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};
