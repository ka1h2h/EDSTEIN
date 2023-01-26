import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Title } from "./OptionsListTitle";

describe("Title", () => {
  it("should be in the document", () => {
    render(<Title title="Hello dropdown" />);
    const title = screen.getByText(/Hello dropdown/i);
    expect(title).toBeInTheDocument();
  });
});
