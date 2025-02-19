import { Meta, type StoryObj } from '@storybook/react';
import ThemeSwitcher from './theme-switcher';
import { ThemeDecorator } from 'shared/config';
import { Theme } from 'app/providers/theme-provider';


const meta = {
  title: 'widgets/ThemeSwitcher',
  component: ThemeSwitcher,
  tags: ['autodocs'],
}  satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
};
