import type { Meta, StoryObj } from '@storybook/react';

import Button, { ThemeButton } from './button';
import { ThemeDecorator } from 'shared/config';
import { Theme } from 'app/providers/theme-provider';

const meta = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'button',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: ThemeButton.PRIMARY,
  }
};
export const Clear: Story = {
  args: {
    variant: ThemeButton.CLEAR,
  }
};

export const Outline: Story = {
  args: {
    variant: ThemeButton.OUTLINE,
  }
};

export const OutlineDark: Story = {
  args: {
    variant: ThemeButton.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};

