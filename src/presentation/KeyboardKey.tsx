export type TextPosition = {
  x: 'right' | 'left' | 'center',
  y: 'top' | 'center' | 'bottom',
};

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
  const $defaultStyle = 'inline-flex relative m-1 p-1 border border-gray-300 rounded shadow text-center select-none transition-all duration-150'
  const $keyPressed = isKeyPressed && 'bg-gray-300 scale-95';
  const $keySize = keySize;
  const $textSize = textSize;
  const $textPositionX = textPosition.x === 'left'
  ? 'justify-start'
  : textPosition.x === 'right'
  ? 'justify-end'
  : 'justify-center';
  const $textPositionY = textPosition.y === 'top'
  ? 'items-start'
  : textPosition.y === 'bottom'
  ? 'items-end'
  : 'items-center';

  const isFOrJKey = code === 'KeyF' || code === 'KeyJ';
  
  return (
    <div className={`${$defaultStyle} ${$keyPressed} ${$keySize} ${$textPositionX} ${$textPositionY}`}>
      <span className={`${$textSize} text-gray-800`}>
        {displayedChar}
      </span>
      {isFOrJKey && (
        <div className=" absolute bottom-1 left-1/2 transform -translate-x-1/2 h-1 w-3 border border-gray-400 rounded"></div>
      )}
    </div>
  );
};