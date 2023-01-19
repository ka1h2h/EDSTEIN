import { OptionList } from "../../molecules/OptionsList/OptionsList.stories";
import classes from "./dropdownInput.module.css";
import { SvgCross } from "./svg";

export type DropdownInputProps = {
  menuStatus: boolean;
  setMenuStatus: React.Dispatch<React.SetStateAction<boolean>>;
  listItems?: OptionList[];
  remove: (index: number, e: void) => void;
};

export const DropdownInput = (props: DropdownInputProps) => {
  const openClosedService = () => {
    if (!props.menuStatus) {
      props.setMenuStatus(true);
    } else {
      props.setMenuStatus(false);
    }
  };
  return (
    <div>
      <div
        className={
          props.menuStatus
            ? classes.dropdownInputOn__button
            : classes.dropdownInputOff__button
        }
        onClick={openClosedService}
      >
        <div className={classes.dropdownInput__items}>
          {props.listItems ? (
            props.listItems.map((item, index) => {
              return (
                <div className={classes.dropdownInput__item}>
                  <span className={classes.dropdownInput__item__title}>
                    {item.title}
                  </span>
                  <a
                    className={classes.dropdownInput__cross}
                    onClick={(e) => props.remove(index, e.stopPropagation())}
                  >
                    <SvgCross />
                  </a>
                </div>
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};
