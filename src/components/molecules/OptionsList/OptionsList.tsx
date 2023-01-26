import { Title } from "../../atoms/contry/OptionsListTitle";
import { Checkbox } from "../../atoms/checkbox/Checkbox";
import { CountryFlag } from "../../atoms/flag/Flag";
import classes from "./optionsList.module.css";
import { OptionList } from "../../organism/dropdown/Dropdown";

export type OptionListProps = {
  data: Array<OptionList>;
  selected?: (item: OptionList, index: number) => void;
  checked?: boolean;
};

export const OptionsList = (props: OptionListProps) => {
  return (
    <div className={classes.optionsList__container}>
      {props.data.map((item, index) => {
        return (
          <div className={classes.optionsList__items}>
            <div
              className={classes.optionsList__item}
              key={index}
              onClick={(e) => props.selected(item, index)}
            >
              <CountryFlag icon={item.icon} />
              <Title title={item.title} />
              <div className={classes.checkbox__container}>
                <Checkbox checked={item.checked} disabled={item.disabled} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
