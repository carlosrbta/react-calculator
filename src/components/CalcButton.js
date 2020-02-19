import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { isNil } from "lodash";

function CalcButton({ operator, label, variant, onClick, disabled }) {
  return (
    <Col>
      <Button
        variant={variant}
        block
        onClick={() => onClick(operator)}
        disabled={disabled}
      >
        {label || operator}
      </Button>
    </Col>
  );
}

export default CalcButton;
