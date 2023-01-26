import { cleanup, render, fireEvent } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

afterEach(cleanup);

describe("State of checkbox", () => {
  it("should be truthy after click if it wasn't, cause initial state of disabled is false", () => {
    let checked = false;
    let disabled = false;
    const { getByTestId } = render(
      <Checkbox
        checked={checked}
        disabled={disabled}
        data-testid="myTest"
        onChange={() => (disabled ? checked : (checked = !checked))}
      />
    );
    const checkBox = getByTestId("myTest");

    expect(checked).toBeFalsy();
    fireEvent.click(checkBox);
    expect(checked).toBeTruthy();
  });

  it("should be falsy after click, cause initial state of disabled is true", () => {
    let checked = false;
    let disabled = true;
    const { getByTestId } = render(
      <Checkbox
        checked={checked}
        disabled={disabled}
        data-testid="myTest"
        onChange={() => (disabled ? checked : (checked = !checked))}
      />
    );
    const checkBox = getByTestId("myTest");

    expect(checked).toBeFalsy();
    fireEvent.click(checkBox);
    expect(checked).toBeFalsy();
  });

  it("should be falsy after click, cause initial state of disabled is false and initial state of 'checked' is 'true'", () => {
    let checked = true;
    let disabled = false;
    const { getByTestId } = render(
      <Checkbox
        checked={checked}
        disabled={disabled}
        data-testid="myTest"
        onChange={() => (disabled ? checked : (checked = !checked))}
      />
    );
    const checkBox = getByTestId("myTest");

    expect(checked).toBeTruthy();
    fireEvent.click(checkBox);
    expect(checked).toBeFalsy();
  });
  it("should be truthy after click, cause initial state of disabled is true and initial state of 'checked' is 'true'", () => {
    let checked = true;
    let disabled = true;
    const { getByTestId } = render(
      <Checkbox
        checked={checked}
        disabled={disabled}
        data-testid="myTest"
        onChange={() => (disabled ? checked : (checked = !checked))}
      />
    );
    const checkBox = getByTestId("myTest");

    expect(checked).toBeTruthy();
    fireEvent.click(checkBox);
    expect(checked).toBeTruthy();
  });
});
