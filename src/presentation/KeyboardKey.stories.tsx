import type { Meta, StoryObj } from '@storybook/react';
import { KeyboardKey } from 'src/presentation/KeyboardKey';

const meta: Meta<typeof KeyboardKey> = {
  component: KeyboardKey,
};

export default meta;
type Story = StoryObj<typeof KeyboardKey>;

export const Primary: Story = {
  args: {
    primaryChar: 'A',
    isShiftPressed: false,
    isKeyPressed: false,
    keySize: 'primary',
  },
};
export const Small: Story = {
  args: {
    primaryChar: '▶',
    isShiftPressed: false,
    isKeyPressed: false,
    keySize: 'small',
  },
};
export const Large: Story = {
  args: {
    primaryChar: 'command',
    isShiftPressed: false,
    isKeyPressed: false,
    keySize: 'command',
    textPosition: 'left',
  },
};
export const Tab: Story = {
  args: {
    primaryChar: 'tab',
    isShiftPressed: false,
    isKeyPressed: false,
    keySize: 'tab',
    textPosition: 'left',
  },
};
export const Return: Story = {
  args: {
    primaryChar: 'return',
    isShiftPressed: false,
    isKeyPressed: false,
    keySize: 'return',
    textPosition: 'left',
  },
};
export const Shift: Story = {
  args: {
    primaryChar: 'shift',
    isShiftPressed: false,
    isKeyPressed: false,
    keySize: 'shift',
    textPosition: 'left',
  },
};
export const Space: Story = {
  args: {
    primaryChar: '',
    isShiftPressed: false,
    isKeyPressed: false,
    keySize: 'space',
  },
};