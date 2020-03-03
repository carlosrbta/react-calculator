import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

function CalcButton({ operator, label, variant, onClick }) {
  return (
    <Col>
      <Button variant={variant} block onClick={() => onClick(operator)}>
        {label || operator}
      </Button>
    </Col>
  );
}

export default CalcButton;
