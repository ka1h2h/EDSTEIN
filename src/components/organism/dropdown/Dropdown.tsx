import { useState } from "react";
import { DropdownInput } from "../../atoms/dropdown_input/DropdownInput";
import { DropdownWindow } from "../dropdow-window/DropdownWindow";
import classes from "./dropdown.module.css";

export type OptionList = {
  icon?: string;
  title: string;
  checked?: boolean;
  disabled?: boolean;
};

export type DropdownProps = {
  value: OptionList[];
  onChange: (value: string[]) => void;
  multiSelect: boolean;
  icons?: boolean;
};

export const Dropdown = (props: DropdownProps) => {
  const [value, setValue] = useState("");
  const [menuStatus, setMenuStatus] = useState(false);
  const [selectedItemList, setSelectedItemList] = useState([]);
  const [dataList, setDataList] = useState(() => {
    if (props.icons) {
      return props.value;
    } else {
      props.value.reduce((acc, curr) => {
        if (curr.icon) {
          curr.icon = "";
        }
        return curr;
      }, props.value[0]);
      return props.value;
    }
  });
  const eventListener = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const selectItemFromWindow = (list: OptionList, index: number) => {
    if (props.multiSelect) {
      dataList.filter((item, id) => {
        return index === id
          ? !dataList[index].checked
            ? (dataList[index].checked = true)
            : (dataList[index].checked = false)
          : item;
      });
    } else {
      dataList.filter((item, id) => {
        return index === id
          ? dataList[index].checked
            ? (dataList[index].checked = false)
            : (dataList[index].checked = true)
          : (item.checked = false);
      });
    }

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
    dataList.filter((item, id) => {
      selectedItemList[index] === item ? (item.checked = false) : "";
    });
  };

  return (
    <div className={classes.dropdown}>
      <div className={classes.dropdown__container}>
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
            value={value}
            selected={selectItemFromWindow}
            data={dataList}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
