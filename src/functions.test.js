import React from "react";
import {
  resolveNumberWithParenthesesTogether,
  resolvePercents,
  convertValueIntoArray,
  resolveInsideParentheses,
  resolveValue
} from "./functions";

function calculate(value) {
  let tmpValue = value;

  tmpValue = resolvePercents(tmpValue);
  tmpValue = resolveNumberWithParenthesesTogether(tmpValue);
  tmpValue = resolveInsideParentheses(tmpValue);
  tmpValue = resolveValue(tmpValue);

  return parseFloat(tmpValue);
}

describe("Calculate", () => {
  let expression;

  test("evaluates the expression correctly", () => {
    expression = "2+3+4-4*3";
    expect(calculate(expression)).toBe(-3);

    expression = "0+3+4";
    expect(calculate(expression)).toBe(7);

    expression = "0-9";
    expect(calculate(expression)).toBe(-9);

    expression = "0.5+2.3";
    expect(calculate(expression)).toBe(2.8);
  });

  it('evaluates expressions starting with a "-" operator', () => {
    expression = "-30";
    expect(calculate(expression)).toBe(-30);
  });

  it('evaluates longer expressions starting with a "-" operator', () => {
    expression = "-30-6";
    expect(calculate(expression)).toBe(-36);

    expression = "-0.5+5.3";
    expect(calculate(expression)).toBe(4.8);
  });
});
