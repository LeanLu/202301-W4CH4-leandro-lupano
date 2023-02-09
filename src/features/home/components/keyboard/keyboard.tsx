import { Key } from "../key/key";

const numbers: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

export function Keyboard() {
  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        {numbers.map((item) => (
          <Key key={item} value={item}></Key>
        ))}

        <li>
          <button className="key big">delete</button>
        </li>
      </ol>
    </div>
  );
}
