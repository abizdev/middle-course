import type { Meta, StoryObj } from '@storybook/react';

import LoginForm from './login-form';

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  args: {}
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

// @ts-ignore
export const Form: Story = {};
