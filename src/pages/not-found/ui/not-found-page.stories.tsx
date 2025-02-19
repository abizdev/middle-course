import { Meta, type StoryObj } from '@storybook/react';
import NotFoundPage from './page'
import { ThemeDecorator } from 'shared/config';
import { Theme } from 'app/providers/theme-provider';

const meta = {
  title: 'pages/NotFound',
  component: NotFoundPage,
  tags: ['autodocs'],
}  satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
};
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
