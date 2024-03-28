'use client'

import { useEffect, useState } from "react";
import { KeyboardTemplate } from "src/presentation/Keyboard.template";
import { KeyAttributes } from "src/presentation/KeyboardKey";
import { row1, row2, row3, row4, row5, row6 } from "src/rows";

export type KeyboardKeys = {
  row1: KeyAttributes[],
  row2: KeyAttributes[],
  row3: KeyAttributes[],
  row4: KeyAttributes[],
  row5: KeyAttributes[],
  row6: KeyAttributes[],
}

export const Keyboard = () => {
  const [keyboardKeys, setKeyboardKeys] = useState<KeyboardKeys>({
    row1,
    row2,
    row3,
    row4,
    row5,
    row6,
  });

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.code === 'Tab') {
      event.preventDefault();
    }
    setKeyboardKeys(prevKeys => {
      const isShiftPressed = event.code === 'ShiftLeft' || event.code === 'ShiftRight';
      return Object.keys(prevKeys).reduce<KeyboardKeys>((acc, key) => {
        acc[key as keyof KeyboardKeys] = prevKeys[key as keyof KeyboardKeys].map(k => ({
          ...k,
          isKeyPressed: k.code === event.code || k.isKeyPressed,
          isShiftPressed: isShiftPressed || k.isShiftPressed
        }));
        return acc;
      }, {} as KeyboardKeys);
    });
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    setKeyboardKeys(prevKeys => {
      const isShiftReleased = event.code === 'ShiftLeft' || event.code === 'ShiftRight';
      return Object.keys(prevKeys).reduce<KeyboardKeys>((acc, key) => {
        acc[key as keyof KeyboardKeys] = prevKeys[key as keyof KeyboardKeys].map(k => ({
          ...k,
          isKeyPressed: k.code === event.code ? false : k.isKeyPressed,
          isShiftPressed: isShiftReleased ? false : k.isShiftPressed
        }));
        return acc;
      }, {} as KeyboardKeys);
    });
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return <KeyboardTemplate {...keyboardKeys}/>;
}