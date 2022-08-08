import { task1sum } from "./task1";

describe("task1sum test", () => {
  it("adds properly", () => {
    expect(task1sum(1, 3)).toBe(4);
  });
});
