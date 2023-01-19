import classes from "./input.module.css";
import { useState, useRef } from "react";

export type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchInput = (props: InputProps) => {
  return (
    <>
      <input
        type="text"
        className={classes.search__input}
        value={props.value}
        onChange={props.onChange}
        placeholder="Поиск"
      />
    </>
  );
};
