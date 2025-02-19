import { Meta, type StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config';
import { Theme } from 'app/providers/theme-provider';
import Navbar from './navbar';

const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  args: {
    className: ''
  }
}  satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
};
