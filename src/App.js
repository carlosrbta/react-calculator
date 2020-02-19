import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CalcButton from "./components/CalcButton";
import Form from "react-bootstrap/Form";
import {
  keyList,
  backspaceKey,
  escapeKey,
  enterKey,
  operatorKeys
} from "./utils";
import { isValidValue } from "./validation";

import "./App.css";

function App() {
  const [value, setValue] = useState("2+2");

  useEffect(() => {
    window.addEventListener("keydown", onKeydown);
    return () => window.removeEventListener("keydown", onKeydown);
  });

  const onClick = val => addValue(val);

  const clearAll = () => setValue("");

  const clearLast = () => {
    const newValue = value.substring(0, value.length - 1);
    setValue(newValue);
  };

  const calculate = () => {
    const results = [];

    let num1, operator, num2;

    value.split("").map(val => {
      if (operatorKeys.includes(val)) {
        console.log("is", val);
      } else {
        console.log(val);
      }
    });

    console.log(value);
    console.log("calculate");
  };

  const onKeydown = ({ key }) => {
    if (!keyList.includes(key)) return;

    if (key === escapeKey) {
      clearAll();
      return;
    }

    if (key === backspaceKey) {
      clearLast();
      return;
    }

    if (key === enterKey) {
      calculate();
      return;
    }

    addValue(key);
  };

  const addValue = add => {
    const newValue = `${value}${add}`;

    if (!isValidValue(newValue)) return;

    setValue(newValue);
  };

  return (
    <Container>
      <Form className="calculator">
        <Row>
          <Col>
            <Form.Control onChange={() => {}} value={value} />
          </Col>
        </Row>

        <Row>
          <CalcButton
            variant="secondary"
            operator="("
            onClick={onClick}
            disabled
          />
          <CalcButton
            variant="secondary"
            operator=")"
            onClick={onClick}
            disabled
          />
          <CalcButton
            variant="secondary"
            operator="%"
            onClick={onClick}
            disabled
          />
          <CalcButton variant="warning" operator="CE" onClick={clearAll} />
        </Row>

        <Row>
          <CalcButton variant="light" operator={7} onClick={onClick} />
          <CalcButton variant="light" operator={8} onClick={onClick} />
          <CalcButton variant="light" operator={9} onClick={onClick} />
          <CalcButton
            variant="secondary"
            operator="/"
            label="÷"
            onClick={onClick}
          />
        </Row>

        <Row>
          <CalcButton variant="light" operator={4} onClick={onClick} />
          <CalcButton variant="light" operator={5} onClick={onClick} />
          <CalcButton variant="light" operator={6} onClick={onClick} />
          <CalcButton
            variant="secondary"
            operator="*"
            label="×"
            onClick={onClick}
          />
        </Row>

        <Row>
          <CalcButton variant="light" operator={1} onClick={onClick} />
          <CalcButton variant="light" operator={2} onClick={onClick} />
          <CalcButton variant="light" operator={3} onClick={onClick} />
          <CalcButton variant="secondary" operator="-" onClick={onClick} />
        </Row>

        <Row>
          <CalcButton variant="light" operator="0" onClick={onClick} />
          <CalcButton variant="light" operator="." onClick={onClick} />
          <CalcButton variant="primary" operator="=" onClick={calculate} />
          <CalcButton
            variant="secondary"
            operator="+"
            label="+"
            onClick={onClick}
          />
        </Row>
      </Form>
    </Container>
  );
}

export default App;
