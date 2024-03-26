
// TODO: 適切なキーサイズ名にする
type KeySize = 'primary' | 'small' | 'command' | 'tab' | 'return' | 'space' | 'shift';

type KeyStyleAttributes = {
  keySize: string,
  textSize: string,
};

const keyStyleMap: { [key in KeySize]: KeyStyleAttributes } = {
  // TODO: 実際にキーボード表示してから適切なキーサイズに調節する。
  primary: { keySize: 'w-12 h-12', textSize: 'text-xl' },
  small: { keySize: 'w-12 h-4', textSize: 'text-xs' },
  command: { keySize: 'w-14 h-12', textSize: 'text-xxs' },
  tab: { keySize: 'w-16 h-12', textSize: 'text-xs' },
  return: { keySize: 'w-21 h-12', textSize: 'text-xs' },
  space: { keySize: 'w-75 h-12', textSize: 'text-xl' },
  shift: { keySize: 'w-33 h-12', textSize: 'text-xs' },
}

type TextPosition = 'right' | 'left' | 'center';

type KeyboardKeyProps = {
  primaryChar: string,
  secondaryChar?: string,
  isShiftPressed: boolean,
  isKeyPressed: boolean,
  keySize: KeySize,
  textPosition: TextPosition,
}

export const KeyboardKey: React.FC<KeyboardKeyProps> = ({
  primaryChar,
  secondaryChar,
  isShiftPressed,
  isKeyPressed,
  keySize,
  textPosition
}) => {
  const displayedChar = isShiftPressed && Boolean(secondaryChar) ? secondaryChar : primaryChar;
  const $keyPressed = isKeyPressed && 'bg-gray-300 transform scale-95';
  const $keyAttributes = keyStyleMap[keySize];
  const $textPosition = textPosition === 'left' ? 'justify-left items-end' : textPosition === 'right' ? 'justify-right items-end' : 'justify-center items-center';
  return (
    <div className={`inline-flex m-1 p-1 border border-gray-300 rounded bg-gray-100 text-center select-none transition-all duration-150 ${$keyPressed} ${$keyAttributes.keySize} ${$textPosition}`}>
      <span className={$keyAttributes.textSize}>
        {displayedChar}
      </span>
    </div>
  );
};