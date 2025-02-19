import { Meta, type StoryObj } from '@storybook/react';
import MainPage from './page'
import { ThemeDecorator } from 'shared/config';
import { Theme } from 'app/providers/theme-provider';

const meta = {
  title: 'pages/Main',
  component: MainPage,
  tags: ['autodocs'],
}  satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
};
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
