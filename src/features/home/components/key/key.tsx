import { useContext } from "react";
import { AppContext } from "../../../../core/context/app.context";

export function Key() {
  const { handlerNumber, handlerDelete } = useContext(AppContext);

  return (
    <ol className="keyboard">
      <li>
        <button className="key" onClick={() => handlerNumber("1")}>
          1
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handlerNumber("2")}>
          2
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handlerNumber("3")}>
          3
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handlerNumber("4")}>
          4
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handlerNumber("5")}>
          5
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handlerNumber("6")}>
          6
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handlerNumber("7")}>
          7
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handlerNumber("8")}>
          8
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handlerNumber("9")}>
          9
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handlerNumber("0")}>
          0
        </button>
      </li>
      <li>
        <button className="key big" onClick={() => handlerDelete()}>
          delete
        </button>
      </li>
    </ol>
  );
}
