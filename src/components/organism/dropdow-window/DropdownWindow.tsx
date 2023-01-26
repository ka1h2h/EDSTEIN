import { OptionsList } from "../../molecules/OptionsList/OptionsList";
import classes from "./dropdownWindow.module.css";
import { Input } from "../../atoms/search/input/Input.stories";
import { OptionList } from "../dropdown/Dropdown";

export type DropdownWindowProps = {
  data: OptionList[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  selected?: (item: OptionList, index: number) => void;
  checked?: boolean;
};

export const DropdownWindow = (props: DropdownWindowProps) => {
  let filteredData = props.data.filter((item) => {
    if (props.value === "") {
      return item;
    } else if (item.title.toLowerCase().includes(props.value.toLowerCase())) {
      return item;
    }
  });
  return (
    <div className={classes.dropdownWindow__container}>
      <div className={classes.dropdownWindow__input}>
        <Input value={props.value} onChange={props.onChange} />
      </div>
      <OptionsList
        data={filteredData}
        selected={props.selected}
        checked={props.checked}
      />
    </div>
  );
};
