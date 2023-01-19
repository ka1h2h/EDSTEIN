import { OptionsList } from "../../molecules/OptionsList/OptionsList";
import { useState } from "react";
import classes from "./dropdownWindow.module.css";
import { DropdownWindowProps } from "./DropdownWindow.stories";
import { Input } from "../../atoms/search/input/Input.stories";

export const DropdownWindow = (props: DropdownWindowProps) => {
  const [value, setValue] = useState("");
  const eventListener = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  let filteredData = props.data.filter((item) => {
    if (value === "") {
      return item;
    } else if (item.title.toLowerCase().includes(value.toLowerCase())) {
      return item;
    }
  });

  return (
    <div className={classes.dropdownWindow__container}>
      <div className={classes.dropdownWindow__input}>
        <Input value={value} onChange={eventListener} />
      </div>
      <OptionsList
        data={filteredData}
        selected={props.selected}
        checked={props.checked}
      />
    </div>
  );
};
