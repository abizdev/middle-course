import type { Meta, StoryObj } from '@storybook/react';

import Button, { ButtonSize, ButtonTheme } from './button';
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
    variant: ButtonTheme.PRIMARY,
  }
};
export const Clear: Story = {
  args: {
    variant: ButtonTheme.CLEAR,
  }
};
export const ClearInverted: Story = {
  args: {
    variant: ButtonTheme.CLEAR_INVERTED,
  }
};

export const Outline: Story = {
  args: {
    variant: ButtonTheme.OUTLINE,
  }
};
export const OutlineDark: Story = {
  args: {
    variant: ButtonTheme.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};
export const OutlineM: Story = {
  args: {
    variant: ButtonTheme.OUTLINE,
    size: ButtonSize.M,
    children: 'Text',
  }
};
export const OutlineL: Story = {
  args: {
    variant: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
    children: 'Text',
  }
};
export const OutlineXL: Story = {
  args: {
    variant: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
    children: 'Text',
  }
};

export const Background: Story = {
  args: {
    variant: ButtonTheme.BACKGROUND,
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};
export const BackgroundInverted: Story = {
  args: {
    variant: ButtonTheme.BACKGROUND_INVERTED,
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};

export const SquareM: Story = {
  args: {
    children: '<',
    variant: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.M,
    square: true,
  },
};
export const SquareL: Story = {
  args: {
    children: '<',
    variant: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.L,
    square: true,
  },
};
export const SquareXL: Story = {
  args: {
    children: '<',
    variant: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.XL,
    square: true,
  },
};

