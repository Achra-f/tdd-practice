const calculator = require("./calculator");

describe("Calculator", () => {
  it("should add two numbers correctly", () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  it("should subtract two numbers correctly", () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  it("should multiply two numbers correctly", () => {
    expect(calculator.multiply(4, 2)).toBe(8);
  });

  it("should divide two numbers correctly", () => {
    expect(calculator.divide(6, 3)).toBe(2);
  });

  it("should throw an error when dividing by zero", () => {
    expect(() => calculator.divide(4, 0)).toThrowError(
      "Cannot divide by zero."
    );
  });
});
