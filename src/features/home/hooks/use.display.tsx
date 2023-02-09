import { useState } from "react";

export type UseDisplayStructure = ReturnType<typeof useDisplay>;
export function useDisplay() {
  // const numbers: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const initialState: string = "";

  let [displayNumbers, setDisplayNumbers] = useState(initialState);

  const handlerNumber = (value: string) => {
    setDisplayNumbers(displayNumbers + value);
  };

  const handlerDelete = () => {
    setDisplayNumbers((displayNumbers = ""));
  };

  return {
    displayNumbers,
    handlerNumber,
    handlerDelete,
  };
}
