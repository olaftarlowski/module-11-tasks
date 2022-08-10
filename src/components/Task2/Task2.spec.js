import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Task2 from "./Task2";

describe("task2 tests", () => {
  const renderComp = (startVal) => render(<Task2 start={startVal} />);

  it("should display 0 on start if no props provided", () => {
    renderComp();
    const counterVal = screen.getByTestId("counter-element");

    expect(counterVal).toHaveTextContent(0);
  });

  it("should display start prop value", () => {
    const startValue = 10;
    renderComp(startValue);
    const counterVal = screen.getByTestId("counter-element");

    expect(counterVal).toHaveTextContent(startValue);
  });

  it("should render increment and decrement button", () => {
    renderComp();
    const buttonPlus = screen.getByRole("button", {
      name: /\+/i,
    });
    const buttonMinus = screen.getByRole("button", {
      name: /-/i,
    });

    expect(buttonPlus).toBeInTheDocument();
    expect(buttonMinus).toBeInTheDocument();
  });

  it("should increment by 1", () => {
    const startValue = 10;
    renderComp(startValue);
    const counterVal = screen.getByTestId("counter-element");
    const buttonPlus = screen.getByRole("button", {
      name: /\+/i,
    });

    userEvent.click(buttonPlus);
    expect(counterVal).toHaveTextContent(startValue + 1);
  });

  it("should decremet by 1", () => {
    const startValue = 10;
    renderComp(startValue);
    const counterVal = screen.getByTestId("counter-element");
    const buttonMinus = screen.getByRole("button", {
      name: /-/i,
    });

    userEvent.click(buttonMinus);
    expect(counterVal).toHaveTextContent(startValue - 1);
  });

  it("should set value to 0", () => {
    const startValue = 10;
    renderComp(startValue);
    const counterVal = screen.getByTestId("counter-element");
    const buttonReset = screen.getByRole("button", {
      name: /reset/i,
    });

    userEvent.click(buttonReset);
    expect(counterVal).toHaveTextContent(0);
  });

  it("should set value to input value", () => {
    const startValue = 10;
    renderComp(startValue);
    const counterVal = screen.getByTestId("counter-element");
    const inputNode = screen.getByLabelText("Change value");
    const buttonChange = screen.getByRole("button", {
      name: /change/i,
    });

    userEvent.click(buttonChange);
    expect(counterVal).toHaveTextContent(inputNode.value);
  });

  it("renders four buttons", async () => {
    const startValue = 112;
    renderComp(startValue);
    const items = await screen.findAllByRole("button");
    expect(items).toHaveLength(4);
  });
});
