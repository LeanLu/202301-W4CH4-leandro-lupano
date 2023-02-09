import { AppContext } from "../../../../core/context/app.context";
import { useContext } from "react";

export function Display() {
  const { displayNumbers } = useContext(AppContext);
  return (
    <>
      <span className="number">{displayNumbers}</span>
    </>
  );
}
