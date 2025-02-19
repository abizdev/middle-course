import { Meta, type StoryObj } from '@storybook/react';
import LangSwitcher from './lang-switcher';


const meta = {
  title: 'widgets/LangSwitcher',
  component: LangSwitcher,
  tags: ['autodocs'],
}  satisfies Meta<typeof LangSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    collapsed: false
  }
};
export const Collapsed: Story = {
  args: {
    collapsed: true
  }
};
