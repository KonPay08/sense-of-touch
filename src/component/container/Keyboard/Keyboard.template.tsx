import { ArrowKeys } from "src/component/presentation/ArrowKeys";
import { MemoizedKeyboardKey } from "src/component/presentation/KeyboardKey";
import { KeyAttributes, KeyboardKeys } from 'src/types/key';

export type KeyboardProps = KeyboardKeys;

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

export const KeyboardTemplate: React.FC<KeyboardProps> = (props) => {
  const arrowKeys = {
    left: props.row6.find(key => key.primaryChar === '◀︎') || fallbackKey,
    up: props.row6.find(key => key.primaryChar === '▲') || fallbackKey,
    down: props.row6.find(key => key.primaryChar === '▼') || fallbackKey,
    right: props.row6.find(key => key.primaryChar === '▶︎') || fallbackKey,
  };
  const row6WithoutArrows = props.row6.filter(key => !['◀︎', '▲', '▼', '▶︎'].includes(key.primaryChar));
  return (
    <div className="border rounded-md shadow p-1" style={{ width: 'fit-content'}}>
      <KeyboardRow keys={props.row1}/>
      <KeyboardRow keys={props.row2}/>
      <KeyboardRow keys={props.row3}/>
      <KeyboardRow keys={props.row4}/>
      <KeyboardRow keys={props.row5}/>
      <div className="flex">
        <KeyboardRow keys={row6WithoutArrows} />
        {arrowKeys.left && <ArrowKeys {...arrowKeys} />}
      </div>
    </div>
  )
}

type KeyboardRowProps = {
  keys: KeyAttributes[],
}

const KeyboardRow: React.FC<KeyboardRowProps> = (props) => {
  return (
    <div className="flex">
      {props.keys.map((data) => (
        <MemoizedKeyboardKey
          key={data.code}
          {...data}
        />
      ))}
    </div>
  )
}