import { ArrowKeys } from "src/presentation/ArrowKeys";
import { KeyAttributes } from "src/presentation/KeyboardKey"
import { KeyboardRow } from "src/presentation/KeyboardRow"

type KeyboardProps = {
  row1: KeyAttributes[],
  row2: KeyAttributes[],
  row3: KeyAttributes[],
  row4: KeyAttributes[],
  row5: KeyAttributes[],
  row6: KeyAttributes[],
}

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

export const Keyboard: React.FC<KeyboardProps> = (props) => {
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