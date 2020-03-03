import React, { useState, useEffect, useMemo } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CalcButton from "./components/CalcButton";
import Form from "react-bootstrap/Form";
import { keyList, backspaceKey, escapeKey, enterKey } from "./constants";
import {
  resolveNumberWithParenthesesTogether,
  resolvePercents,
  resolveInsideParentheses,
  resolveValue
} from "./functions";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [invalidExpression, setInvalidExpression] = useState(false);
  const [isCalculationCompleted, setCalculationCompleted] = useState(false);

  useEffect(() => {
    window.addEventListener("keydown", onKeydown);
    return () => window.removeEventListener("keydown", onKeydown);
  });

  const onClick = val => addValue(val);

  const clearAll = () => {
    setValue("");
    setCalculationCompleted(false);
    setInvalidExpression(false);
  };

  const clearLast = () => {
    const newValue = value.substring(0, value.length - 1);
    setValue(newValue);
    setInvalidExpression(false);
  };

  const calculate = () => {
    try {
      let tmpValue = value;

      tmpValue = resolvePercents(tmpValue);
      tmpValue = resolveNumberWithParenthesesTogether(tmpValue);
      tmpValue = resolveInsideParentheses(tmpValue);
      tmpValue = resolveValue(tmpValue);

      setValue(tmpValue);
      setCalculationCompleted(true);
    } catch (e) {
      setInvalidExpression(e.message);
    }
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
    setValue(newValue);
  };

  const shouldDisplayAllClear = useMemo(
    () => {
      return isCalculationCompleted || !value;
    },
    [isCalculationCompleted, value]
  );

  return (
    <Container>
      <Form className="calculator">
        <h5 className="title">React Calculator</h5>
        <Row>
          <Col className="col-form-control">
            <Form.Control onChange={() => {}} value={value} />
            {invalidExpression && (
              <Form.Text className="text-muted">{invalidExpression}</Form.Text>
            )}
          </Col>
        </Row>

        <Row>
          <CalcButton variant="secondary" operator="(" onClick={onClick} />
          <CalcButton variant="secondary" operator=")" onClick={onClick} />
          <CalcButton variant="secondary" operator="%" onClick={onClick} />
          {shouldDisplayAllClear ? (
            <CalcButton variant="warning" operator="AC" onClick={clearAll} />
          ) : (
            <CalcButton variant="warning" operator="C" onClick={clearLast} />
          )}
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
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
    </Container>
  );
}

export default App;
