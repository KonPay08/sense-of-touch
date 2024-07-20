import type { Meta, StoryObj } from '@storybook/react';
import { ArrowKeys } from 'src/component/presentation/ArrowKeys';
import { row6 } from 'src/const/rows';
import { KeyAttributes } from 'src/types/key';

const meta: Meta<typeof ArrowKeys> = {
  component: ArrowKeys,
};

export default meta;
type Story = StoryObj<typeof ArrowKeys>;

const fallbackKey: KeyAttributes = {
  code: '',
  primaryChar: '',
  keySize: '',
  textSize: '',
  textPosition: {
    x: 'center',
    y: 'center',
  },
  isKeyPressed: false,
  isShiftPressed: false,
}

const arrowKeys = {
  left: row6.find(key => key.primaryChar === '◀︎') || fallbackKey,
  up: row6.find(key => key.primaryChar === '▲') || fallbackKey,
  down: row6.find(key => key.primaryChar === '▼') || fallbackKey,
  right: row6.find(key => key.primaryChar === '▶︎') || fallbackKey,
};

export const Primary: Story = {
  args: {
    ...arrowKeys
  }
};