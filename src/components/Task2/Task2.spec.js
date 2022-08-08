import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Task2 from "./Task2";

describe("task2 tests", () => {
  const renderComp = () => render(<Task2 />);

  it("should display 0 on start", () => {
    renderComp();
    const counterVal = screen.getByText(/0/i);

    expect(counterVal).toBeInTheDocument();
  });

  it("should increment by 1", () => {
    renderComp();
    const counterVal = screen.getByTestId("counter-element");
    const buttonPlus = screen.getByRole("button", {
      name: /\+/i,
    });

    userEvent.click(buttonPlus);
    expect(counterVal).toHaveTextContent(1);

    userEvent.click(buttonPlus);
    expect(counterVal).toHaveTextContent(2);
  });

  it("should decrement by 1", () => {
    renderComp();
    const counterVal = screen.getByTestId("counter-element");
    const buttonMinus = screen.getByRole("button", {
      name: /-/i,
    });

    userEvent.click(buttonMinus);
    expect(counterVal).toHaveTextContent(-1);

    userEvent.click(buttonMinus);
    expect(counterVal).toHaveTextContent(-2);
  });
});
