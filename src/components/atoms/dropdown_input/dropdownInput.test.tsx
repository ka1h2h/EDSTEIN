import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import { useState } from "react";
import classes from "./dropdownInput.module.css";
import "@testing-library/jest-dom";

import { SvgCross } from "./svg";
import { OptionList } from "../../organism/dropdown/Dropdown";
import { findDOMNode, unmountComponentAtNode } from "react-dom";
import { act } from "react-test-renderer";
import React from "react";

export const DropdownInput = () => {
  const [menuStatus, setMenuStatus] = useState(false);

  const optionListType: OptionList[] = [
    {
      icon: "Rus",
      title: "Русский",
    },
  ];
  const [selectedItemList, setSelectedItemList] = useState(optionListType);
  const openClosedService = () => {
    if (menuStatus) {
      setMenuStatus(true);
    } else {
      setMenuStatus(false);
    }
  };

  const remove = (index: number) => {
    setSelectedItemList((prevState) =>
      prevState.filter((item) => item !== prevState[index])
    );
    selectedItemList.filter((item, id) => {
      selectedItemList[index] === item ? (item.checked = false) : "";
    });
  };
  return (
    <div className={classes.dropdown__input}>
      <div
        className={
          menuStatus
            ? classes.dropdownInputOn__button
            : classes.dropdownInputOff__button
        }
        onClick={openClosedService}
        data-testid="menuStatus"
      >
        <div className={classes.dropdownInput__items}>
          {selectedItemList ? (
            selectedItemList.map((item, index) => {
              return (
                <div
                  className={classes.dropdownInput__item}
                  key={index}
                  data-testid="item"
                >
                  <span className={classes.dropdownInput__item__title}>
                    {item.title}
                  </span>
                  <a
                    className={classes.dropdownInput__cross}
                    onClick={(e) => remove(index)}
                    data-testid="removeItem"
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
let container: any = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    render(<DropdownInput />, container);
  });
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
describe("Title", () => {
  it("should be in the document because it is in the received list", () => {
    const rus = screen.getByText(/Русский/i);
    expect(rus).toBeInTheDocument();
  });
  it("should't be in the document because it isn't in the received list", () => {
    const bra = screen.queryByText(/Бразильский/i);
    expect(bra).not.toBeInTheDocument();
  });
  it("should be in the document before clicking cross button, but after must disappear", () => {
    const rus = screen.getByText(/Русский/i);

    const item = screen.getByTestId("item");
    const russCross = screen.getByTestId("removeItem");
    expect(rus).toBeInTheDocument();
    expect(russCross).toBeInTheDocument();
    expect(item).toBeInTheDocument();
    fireEvent.click(russCross);
    expect(rus).not.toBeInTheDocument();
    expect(russCross).not.toBeInTheDocument();
    expect(item).not.toBeInTheDocument();
  });
});

describe("", () => {
  it("", () => {
    render(<DropdownInput />);
    const { container } = render(<DropdownInput />);
    const arr = container.querySelectorAll(".dropdownInputOff__button");
    const ss = container.querySelectorAll(".dropdownInputOn__button");
    console.log(container);
  });
});
