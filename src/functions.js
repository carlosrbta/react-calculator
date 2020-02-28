import { operations } from "./utils";
import { isNumber } from "lodash";

// Resolve numbers with parentheses together
// Exemple 2(1+2) ---> 2*(1+2)
export const resolveNumberWithParenthesesTogether = value => {
  return value.replace(/[0-9]\(/g, e => e.replace("(", "*("));
};

export const removeParentheses = value => {};

// Resolve numbers with %
// Exemple 20% ---> 20/100
export const resolvePercents = value => {
  return value.replace(new RegExp("%", "g"), e => e.replace("%", "/100"));
};

export const resolveInsideParentheses = value => {
  let hasMoreParentheses = true;
  let temp = value;

  let i = 0;
  while (hasMoreParentheses) {
    let find = findParentheses(temp);

    if (!find) {
      hasMoreParentheses = false;
      return temp;
    }

    // Clear trashs
    find = find.replace("(", "").replace(")", "");

    const total = resolveValue(find);

    temp = temp.replace("(" + find + ")", total);

    if (i === 3) {
      hasMoreParentheses = false;
      console.log("block");
      // return temp;
    }
    i++;
  }

  return temp;
};

export const resolveValue = value => {
  console.log("resolveValue", value);
  const operators = ["*", "/", "+", "-"];

  let temp = value;
  operators.map(op => {
    const arrayValues = convertValueIntoArray(temp);

    let index = arrayValues.findIndex(val => val === op);

    if (index > 0) {
      const operator = arrayValues[index];
      const number1 = arrayValues[index - 1];
      const number2 = arrayValues[index + 1];

      const total = operations[operator](number1, number2);
      const toReplace = number1 + "" + operator + "" + number2;

      temp = temp.replace(toReplace, total);

      index = arrayValues.findIndex(val => val === op);
      if (index > 1) {
        temp = resolveValue(temp);
      }
    }
  });
  return temp;
};

export const convertValueIntoArray = value => {
  const array = value.split("");
  const priority = ["*", "/", "+", "-"];

  let arrayValues = [];
  let posistion = 0;

  for (var i = 0; i < array.length; i++) {
    const isCharacterZero = array[i] === "0";
    const isCharacterDot = array[i] === ".";
    const isFirstCharacterMinus = array[i] === "-" && i === 0;
    const isLastCharacterOperatorAndNowMinus =
      array[i] === "-" && array[i - 1] && priority.includes(array[i - 1]);

    if (
      parseInt(array[i]) ||
      isCharacterZero ||
      isCharacterDot ||
      isFirstCharacterMinus ||
      isLastCharacterOperatorAndNowMinus
    ) {
      arrayValues[posistion] = (arrayValues[posistion] || "") + "" + array[i];
    } else {
      posistion++;
      arrayValues[posistion] = array[i];
      posistion++;
    }
  }

  return arrayValues;
};

export const findParentheses = val => {
  const result = val.match(/([(])[^()]+[)]/);
  return result && result[0];
};
