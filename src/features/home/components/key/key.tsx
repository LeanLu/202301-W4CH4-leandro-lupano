import { useDisplay } from "../../hooks/use.display";

export function Key() {
  const { handleNumber, handleDelete } = useDisplay();

  return (
    <ol className="keyboard">
      <li>
        <button className="key" onClick={() => handleNumber("1")}>
          1
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handleNumber("2")}>
          2
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handleNumber("3")}>
          3
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handleNumber("4")}>
          4
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handleNumber("5")}>
          5
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handleNumber("6")}>
          6
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handleNumber("7")}>
          7
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handleNumber("8")}>
          8
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handleNumber("9")}>
          9
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handleNumber("0")}>
          0
        </button>
      </li>
      <li>
        <button className="key big" onClick={() => handleDelete()}>
          delete
        </button>
      </li>
    </ol>
  );
}
