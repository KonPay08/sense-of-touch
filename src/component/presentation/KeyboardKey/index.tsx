import { memo } from 'react';
import { KeyAttributes } from 'src/types/key';

type KeyboardKeyProps = KeyAttributes;

export const KeyboardKey: React.FC<KeyboardKeyProps> = ({
  code,
  primaryChar,
  secondaryChar,
  isShiftPressed,
  isKeyPressed,
  keySize,
  textSize,
  textPosition
}) => {
  const displayedChar = isShiftPressed && Boolean(secondaryChar) ? secondaryChar : primaryChar;

  // CSS変数を動的に設定
  const dynamicKeyStyle: React.CSSProperties = {
    '--bg-color': isKeyPressed ? '#e5e7eb' : 'transparent',
    '--scale': isKeyPressed ? '0.95' : '1',
  } as React.CSSProperties;

  const keyClasses = [
    'key',
    keySize,
    textPosition.x === 'left' ? 'justify-start' : textPosition.x === 'right' ? 'justify-end' : 'justify-center',
    textPosition.y === 'top' ? 'items-start' : textPosition.y === 'bottom' ? 'items-end' : 'items-center'
  ].join(' ');

  const isFOrJKey = code === 'KeyF' || code === 'KeyJ';

  return (
    <div className={keyClasses} style={dynamicKeyStyle} data-key-code={code}>
      <span className={`${textSize} text-gray-800`}>
        {displayedChar}
      </span>
      {isFOrJKey && (
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 h-1 w-3 border border-gray-400 rounded"></div>
      )}
    </div>
  );
};

export const MemoizedKeyboardKey = memo(KeyboardKey);