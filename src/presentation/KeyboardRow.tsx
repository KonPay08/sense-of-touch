import { KeyAttributes, KeyboardKey } from "src/presentation/KeyboardKey"

type KeyboardRowProps = {
  keys: KeyAttributes[],
}

export const KeyboardRow: React.FC<KeyboardRowProps> = (props) => {
  return (
    <div className="flex">
      {props.keys.map((data) => (
        <KeyboardKey
          key={data.code}
          {...data}
        />
      ))}
    </div>
  )
}