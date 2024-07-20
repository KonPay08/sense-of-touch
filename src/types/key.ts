export type KeyAttributes = {
  code: string,
  primaryChar: string,
  secondaryChar?: string,
  isShiftPressed: boolean,
  isKeyPressed: boolean,
  keySize: string,
  textSize: string,
  textPosition: TextPosition,
}

export type TextPosition = {
  x: 'right' | 'left' | 'center',
  y: 'top' | 'center' | 'bottom',
};

export type KeyboardKeys = {
  row1: KeyAttributes[],
  row2: KeyAttributes[],
  row3: KeyAttributes[],
  row4: KeyAttributes[],
  row5: KeyAttributes[],
  row6: KeyAttributes[],
}