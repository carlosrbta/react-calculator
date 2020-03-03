import React from "react";
import {
  resolveNumberWithParenthesesTogether,
  resolvePercents,
  convertValueIntoArray,
  resolveInsideParentheses,
  resolveValue
} from "./functions";

function calculate(value) {
  try {
    let tmpValue = value;

    tmpValue = resolvePercents(tmpValue);
    tmpValue = resolveNumberWithParenthesesTogether(tmpValue);
    tmpValue = resolveInsideParentheses(tmpValue);
    tmpValue = resolveValue(tmpValue);

    return parseFloat(tmpValue);
  } catch (e) {
    return () => {
      throw new Error(e.message);
    };
  }
}

describe("Calculate", () => {
  let expression;

  test("evaluates basic expressions", () => {
    expression = "7+2";
    expect(calculate(expression)).toBe(9);

    expression = "3*2";
    expect(calculate(expression)).toBe(6);

    expression = "7-6";
    expect(calculate(expression)).toBe(1);

    expression = "8/2";
    expect(calculate(expression)).toBe(4);
  });

  test("evaluates intermediate expressions", () => {
    expression = "7-3*2";
    expect(calculate(expression)).toBe(1);

    expression = "2+3+4-4*3";
    expect(calculate(expression)).toBe(-3);

    expression = "0+3+4";
    expect(calculate(expression)).toBe(7);

    expression = "0-9";
    expect(calculate(expression)).toBe(-9);

    expression = "10-11";
    expect(calculate(expression)).toBe(-1);

    expression = "0.5+2.3";
    expect(calculate(expression)).toBe(2.8);
  });

  test('evaluates expressions starting with a "-" operator', () => {
    expression = "-30";
    expect(calculate(expression)).toBe(-30);

    expression = "-30-6";
    expect(calculate(expression)).toBe(-36);

    expression = "-0.5+5.3";
    expect(calculate(expression)).toBe(4.8);
  });

  test('should throw an error for expressions starting with any other operator apart from "-" ', () => {
    expression = "*30-6";
    expect(calculate(expression)).toThrow();

    expression = "*3";
    expect(calculate(expression)).toThrow();

    expression = "+4-6";
    expect(calculate(expression)).toThrow();

    expression = "/4-6";
    expect(calculate(expression)).toThrow();

    expression = "%10+2";
    expect(calculate(expression)).toThrow();
  });
});
