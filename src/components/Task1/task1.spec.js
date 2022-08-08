import { render, screen } from "@testing-library/react";
import App from "../../App";

describe("execute task1 function", () => {
  render(<App />);

  it("should render app name", () => {
    const linkElement = screen.getByText(/app/i);
    expect(linkElement).toBeInTheDocument();
  });
});
