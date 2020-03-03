const backspaceKey = "Backspace";
const escapeKey = "Escape";
const enterKey = "Enter";
const pointKey = ".";
const equalKey = "=";
const numbersKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const operatorKeys = ["+", "-", "*", "/"];
const parenthesesKeys = ["(", ")"];
const percentsKey = "%";

const keyList = [
  ...numbersKeys,
  ...parenthesesKeys,
  ...operatorKeys,
  pointKey,
  equalKey,
  backspaceKey,
  escapeKey,
  enterKey,
  percentsKey
];

export { keyList, operatorKeys, backspaceKey, escapeKey, enterKey };
