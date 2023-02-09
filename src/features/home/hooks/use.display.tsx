import { useState } from "react";

export type useDisplayStructure = ReturnType<typeof useDisplay>;
export function useDisplay() {
  const numbers: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const initialState: string = "";
  let [displayNumbers, setDisplayNumbers] = useState(initialState);

  const handleNumber = (value: string) => {
    setDisplayNumbers(displayNumbers + value);
  };

  const handleDelete = () => {
    setDisplayNumbers((displayNumbers = ""));
  };

  return {
    numbers,
    displayNumbers,
    handleNumber,
    handleDelete,
  };
}
