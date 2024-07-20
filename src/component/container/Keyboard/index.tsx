'use client'

import { KeyboardTemplate } from "src/component/container/Keyboard/Keyboard.template";
import { useKeyboard } from "src/component/container/Keyboard/useKeyboard";

export const Keyboard = () => {
  const keyboardKeys = useKeyboard();
  return <KeyboardTemplate {...keyboardKeys}/>;
};