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
    const startValue = -111;
    renderComp(startValue);
    const counterVal = screen.getByTestId("counter-element");

    expect(counterVal).toHaveTextContent(startValue);
  });

  it("should increment by 1", () => {
    const startValue = 112;
    renderComp(startValue);
    const counterVal = screen.getByTestId("counter-element");
    const buttonPlus = screen.getByRole("button", {
      name: /\+/i,
    });

    userEvent.click(buttonPlus);
    expect(counterVal).toHaveTextContent(startValue + 1);

    // userEvent.click(buttonPlus);
    // expect(counterVal).toHaveTextContent(2);
  });
  test("renders three buttons", async () => {
    const startValue = 112;
    renderComp(startValue);
    const items = await screen.findAllByRole("button");
    expect(items).toHaveLength(3);
  });
});
