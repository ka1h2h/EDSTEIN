import { useState } from "react";
import { DropdownInput } from "../atoms/dropdown_input/DropdownInput";
import { OptionList } from "../molecules/OptionsList/OptionsList.stories";
import { DropdownWindow } from "../organism/dropdow-window/DropdownWindow";
import classes from "./dropdown.module.css";

export type DropdownProps = {
  value: OptionList[];
  onChange: (value: string[]) => void;
};

export const Dropdown = (props: DropdownProps) => {
  const [value, setValue] = useState("");
  const [menuStatus, setMenuStatus] = useState(false);
  const [selectedItemList, setSelectedItemList] = useState([]);
  const [dataList, setDataList] = useState(props.value);
  const eventListener = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const selectItemFromWindow = (list: OptionList, index: number) => {
    const selectedItems = dataList.filter((item, id) => {
      index === id
        ? dataList[index].checked
          ? (dataList[index].checked = false)
          : (dataList[index].checked = true)
        : item;
    });

    setDataList([...dataList, ...selectedItems]);
    const selectedFields = dataList.filter((item) => {
      return item.checked ? item : "";
    });

    setSelectedItemList(selectedFields);
    const result: string[] = selectedFields.map((item) => item.title);
    props.onChange(result);
  };

  const removeItemFromWindow = (index: number) => {
    setSelectedItemList((prevState) =>
      prevState.filter((item) => item !== prevState[index])
    );
    const removedItems = dataList.filter((item, id) => {
      selectedItemList[index] === item ? (item.checked = false) : "";
    });
    setDataList([...dataList, ...removedItems]);
  };

  return (
    <div>
      <DropdownInput
        menuStatus={menuStatus}
        listItems={selectedItemList}
        setMenuStatus={setMenuStatus}
        remove={removeItemFromWindow}
      />
      {menuStatus ? (
        <DropdownWindow
          className={classes.dropdownWindow}
          onChange={eventListener}
          selected={selectItemFromWindow}
          data={dataList}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
