const backspaceKey = "Backspace";

const escapeKey = "Escape";

const enterKey = "Enter";

const operatorKeys = ["+", "-", "*", "/"];

const keyList = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "=",
  "(",
  ")",
  ".",
  ...operatorKeys,
  backspaceKey,
  escapeKey,
  enterKey
];

//  const newValue = operations[operator](currentValue, inputValue)
const operations = {
  "/": (prevValue, nextValue) => prevValue / nextValue,
  "*": (prevValue, nextValue) => prevValue * nextValue,
  "+": (prevValue, nextValue) => prevValue + nextValue,
  "-": (prevValue, nextValue) => prevValue - nextValue,
  "=": (prevValue, nextValue) => nextValue
};

/*
a number key (0–9)
an operator key (+, -, ×, ÷)
the decimal key
the equals key
the clear key
*/

export { keyList, operatorKeys, backspaceKey, escapeKey, enterKey, operations };
