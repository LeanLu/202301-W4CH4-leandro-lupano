import { SyntheticEvent } from "react";

export function Key({ value }: any) {
  // const handleClick = (event: SyntheticEvent) => {
  //   const keyboard = event.target as HTMLFormElement;
  //   const buttons = keyboard.querySelectorAll("button");
  //   const buttonValue = buttons[0].value;

  //   console.log(buttons);
  // };

  return (
    <li>
      <button className="key">{value}</button>
    </li>
  );
}
