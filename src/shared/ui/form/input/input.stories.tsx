import type { Meta, StoryObj } from '@storybook/react';

import Input, { InputSize } from './input';
import { Theme } from 'app/providers/theme-provider';
import { ThemeDecorator } from 'shared/config';

const meta = {
  title: 'shared/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    type: 'text',
    placeholder: 'Type here...',
  },
  decorators: [ThemeDecorator(Theme.DARK)]
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputM: Story = {
  args: { size: InputSize.M },
};
export const InputL: Story = {
  args: { size: InputSize.L },
};
export const InputXL: Story = {
  args: { size: InputSize.XL }
};
export const InputError: Story = {
  args: { error: true }
};

