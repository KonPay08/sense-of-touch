import { KeyAttributes, KeyboardKey } from "src/presentation/KeyboardKey";

type ArrowKeysProps = {
  left: KeyAttributes,
  up: KeyAttributes,
  down: KeyAttributes,
  right: KeyAttributes,
}

export const ArrowKeys: React.FC<ArrowKeysProps> = ({ left, up, down, right }) => {
  return (
    <div className="flex justify-center items-center">
      <KeyboardKey {...left} />
      <div className="flex flex-col">
        <KeyboardKey {...up} />
        <KeyboardKey {...down} />
      </div>
      <KeyboardKey {...right} />
    </div>
  );
};
