import { useState } from "react";
import classes from "./index.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "./components/templates/Dropdown";
import { OptionList } from "./components/molecules/OptionsList/OptionsList.stories";

export const App = () => {
  const [value, setValue] = useState([]);
  console.log(value);

  return (
    <div className={classes.wrapper}>
      <Dropdown onChange={setValue} />
    </div>
  );
};
