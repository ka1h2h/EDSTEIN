import classes from "./country.module.css";

export type TitleProps = {
  title: string;
};

export const Title = (props: TitleProps) => {
  return <span className={classes.country}>{props.title}</span>;
};
