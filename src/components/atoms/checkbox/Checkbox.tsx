import classes from "./checkbox.module.css";

export type CheckboxProps = {
  checked?: boolean;
  disabled?: boolean;
};

export const Checkbox = (props: CheckboxProps) => {
  return (
    <input
      type="checkbox"
      checked={props.checked}
      disabled={props.disabled}
      className={classes.checkbox}
    />
  );
};
