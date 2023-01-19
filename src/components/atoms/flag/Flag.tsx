import {
  Rus,
  Spain,
  Britain,
  Germany,
  Italy,
  Poland,
} from "./svgies/Countries";
import classes from "./flag.module.css";

export type FlagProps = {
  icon: string;
};

const countryMap = new Map([
  ["Rus", Rus],
  ["Britain", Britain],
  ["Spain", Spain],
  ["Germany", Germany],
  ["Italy", Italy],
  ["Poland", Poland],
]);

export const CountryFlag = (props: FlagProps) => {
  if (typeof props.icon === "object") {
    return;
  }
  let Flag = countryMap.get(props.icon);
  return props.icon ? <Flag className={classes.flag} /> : <></>;
};
