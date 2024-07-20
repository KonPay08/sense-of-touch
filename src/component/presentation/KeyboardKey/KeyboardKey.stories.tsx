import type { Meta, StoryObj } from '@storybook/react';
import { KeyboardKey } from 'src/component/presentation/KeyboardKey';
import { row3, row4, row5, row6 } from 'src/const/rows';
import { TextPosition } from 'src/types/key';

const meta: Meta<typeof KeyboardKey> = {
  component: KeyboardKey,
};

export default meta;
type Story = StoryObj<typeof KeyboardKey>;

const KEY_A = row4.find(row => row.code === 'KeyA');
const KEY_RIGHT = row6.find(row => row.code === 'ArrowRight');
const KEY_META = row6.find(row => row.code === 'MetaLeft');
const KEY_TAB = row3.find(row => row.code === 'Tab');
const KEY_ENTER = row4.find(row => row.code === 'Enter');
const KEY_SHIFT = row5.find(row => row.code === 'ShiftRight');
const KEY_SPACE = row6.find(row => row.code === 'Space');

export const Primary: Story = {
  args: {
    ...KEY_A, 
    textPosition: KEY_A?.textPosition as TextPosition,
  },
};
export const Small: Story = {
  args: {
    ...KEY_RIGHT, 
    textPosition: KEY_RIGHT?.textPosition as TextPosition,
  },
};
export const Large: Story = {
  args: {
    ...KEY_META, 
    textPosition: KEY_META?.textPosition as TextPosition,
  },
};
export const Tab: Story = {
  args: {
    ...KEY_TAB, 
    textPosition: KEY_TAB?.textPosition as TextPosition,
  },
};
export const Return: Story = {
  args: {
    ...KEY_ENTER, 
    textPosition: KEY_ENTER?.textPosition as TextPosition,
  },
};
export const Shift: Story = {
  args: {
    ...KEY_SHIFT, 
    textPosition: KEY_SHIFT?.textPosition as TextPosition,
  },
};
export const Space: Story = {
  args: {
    ...KEY_SPACE, 
    textPosition: KEY_SPACE?.textPosition as TextPosition,
  },
};