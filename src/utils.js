const backspaceKey = "Backspace";
const escapeKey = "Escape";
const enterKey = "Enter";
const pointKey = ".";
const equalKey = "=";
const numbersKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const operatorKeys = ["+", "-", "*", "/"];
const parenthesesKeys = ["(", ")"];

const keyList = [
  ...numbersKeys,
  ...parenthesesKeys,
  ...operatorKeys,
  pointKey,
  equalKey,
  backspaceKey,
  escapeKey,
  enterKey
];

const operations = {
  "/": (number1, number2) => parseFloat(number1) / parseFloat(number2),
  "*": (number1, number2) => parseFloat(number1) * parseFloat(number2),
  "+": (number1, number2) => parseFloat(number1) + parseFloat(number2),
  "-": (number1, number2) => parseFloat(number1) - parseFloat(number2),
  "=": (number1, number2) => number2
};

export { keyList, operatorKeys, backspaceKey, escapeKey, enterKey, operations };
