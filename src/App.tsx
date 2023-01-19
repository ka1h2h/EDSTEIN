import { useState } from "react";
import classes from "./index.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, OptionList } from "./components/organism/dropdown/Dropdown";

export const App = () => {
  const [value, setValue] = useState([]);
  const optionListType: OptionList[] = [
    {
      icon: "Rus",
      title: "Русский",
    },
    {
      icon: "Britain",
      title: "Английский",
    },
    {
      icon: "Spain",
      title: "Испанский",
    },
    {
      icon: "Germany",
      title: "Немецкий",
    },
    {
      icon: "Italy",
      title: "Итальянский",
    },
    {
      icon: "Poland",
      title: "Польский",
    },
  ];
  return (
    <div className={classes.wrapper}>
      <Dropdown
        value={optionListType}
        onChange={setValue}
        multiSelect={true}
        icons={true}
      />
    </div>
  );
};
