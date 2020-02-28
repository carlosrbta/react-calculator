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
  operatorKeys,
  operations
} from "./utils";
import { isValidExpression } from "./validation";
import {
  resolveNumberWithParenthesesTogether,
  resolvePercents,
  convertValueIntoArray,
  resolveInsideParentheses,
  resolveValue
} from "./functions";
import { isNumber } from "lodash";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [invalidExpression, setInvalidExpression] = useState(false);

  useEffect(() => {
    window.addEventListener("keydown", onKeydown);
    return () => window.removeEventListener("keydown", onKeydown);
  });

  const onClick = val => addValue(val);

  const clearAll = () => {
    setValue("");
  };

  const clearLast = () => {
    const newValue = value.substring(0, value.length - 1);
    setValue(newValue);
  };

  const calculate = () => {
    const checkValid = isValidExpression(value);
    if (checkValid) {
      // setInvalidExpression(checkValid);
      // return;
    }

    let tmpValue = value;

    tmpValue = resolvePercents(tmpValue);
    tmpValue = resolveNumberWithParenthesesTogether(tmpValue);
    tmpValue = resolveInsideParentheses(tmpValue);
    tmpValue = resolveValue(tmpValue);

    setValue(tmpValue);
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

    // if (!isValidValue(newValue)) return;
    setValue(newValue);
  };

  return (
    <Container>
      <Form className="calculator">
        <h5 className="title">React Calculator</h5>
        <Row>
          <Col className="col-form-control">
            <Form.Control onChange={() => {}} value={value} />
            {invalidExpression && (
              <Form.Text className="text-muted">Invalid expression</Form.Text>
            )}
          </Col>
        </Row>

        <Row>
          <CalcButton variant="secondary" operator="(" onClick={onClick} />
          <CalcButton variant="secondary" operator=")" onClick={onClick} />
          <CalcButton variant="secondary" operator="%" onClick={onClick} />
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

      <div className="footer">
        <a
          href="https://github.com/carlosrbta/react-calculator"
          target="_blank"
        >
          Github
        </a>
      </div>
    </Container>
  );
}

export default App;
