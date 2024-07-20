import { MemoizedKeyboardKey } from "src/component/presentation/KeyboardKey";
import { KeyAttributes } from "src/types/key";

type ArrowKeysProps = {
  left: KeyAttributes,
  up: KeyAttributes,
  down: KeyAttributes,
  right: KeyAttributes,
}

export const ArrowKeys: React.FC<ArrowKeysProps> = ({ left, up, down, right }) => {
  return (
    <div className="flex justify-center items-center">
      <MemoizedKeyboardKey {...left} />
      <div className="flex flex-col">
        <MemoizedKeyboardKey {...up} />
        <MemoizedKeyboardKey {...down} />
      </div>
      <MemoizedKeyboardKey {...right} />
    </div>
  );
};
