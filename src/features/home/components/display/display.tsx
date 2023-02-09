import { useDisplay } from "../../hooks/use.display";

export function Display() {
  const { displayNumbers } = useDisplay();
  return <span className="number">{displayNumbers}</span>;
}
