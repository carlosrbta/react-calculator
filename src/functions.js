// Resolve numbers with parentheses together
// Exemple 2(1+2) ---> 2*(1+2)
export const resolveNumberWithParenthesesTogether = value => {
  return value.replace(/[0-9]\(/g, e => e.replace("(", "*("));
};

export const isOnlyValueWithPercents = value => {
  const regex = "(\\d+(\\.\\d+)?|\\.\\d+) ?%";

  return value.match(new RegExp("^" + regex + "$", "i"));
};

export const resolveInsideParentheses = value => {
  let hasMoreParentheses = true;
  let temp = value;

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
  }

  return temp;
};

export const resolveValue = value => {
  const operators = ["%", "*", "/", "+", "-"];

  if (/^[%*+/]/.test(value)) {
    throw new Error("Cannot start the expression with invalid operators");
  }

  if (isOnlyValueWithPercents(value)) {
    return operations["/"](value, 100);
  }

  let temp = value;
  operators.map(op => {
    const arrayValues = convertValueIntoArray(temp);

    let index = arrayValues.findIndex(val => val === op);

    if (index > 0) {
      const operator = arrayValues[index];
      const number1 = arrayValues[index - 1];
      const number2 = arrayValues[index + 1];

      const total = operations[operator](number1, number2);

      let toReplace = number1 + "" + operator + "" + number2;
      if (operator === "%") {
        toReplace = number1 + "%";
      }

      temp = temp.replace(toReplace, total);

      index = arrayValues.findIndex(val => val === op);
      if (index >= 1) {
        temp = resolveValue(temp);
      }
    }
    return {};
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

  return arrayValues.filter(a => a);
};

export const findParentheses = val => {
  const result = val.match(/([(])[^()]+[)]/);
  return result && result[0];
};

export const operations = {
  "/": (number1, number2) => parseFloat(number1) / parseFloat(number2),
  "*": (number1, number2) => parseFloat(number1) * parseFloat(number2),
  "+": (number1, number2) => parseFloat(number1) + parseFloat(number2),
  "-": (number1, number2) => parseFloat(number1) - parseFloat(number2),
  "%": (number1, number2) => {
    if (!number2) return 100 / parseFloat(number1);
    return parseFloat(number1) / 100;
  },
  "=": (number1, number2) => number2
};
