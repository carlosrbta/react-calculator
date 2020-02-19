import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";

import "./App.css";

function App() {
  return (
    <Container>
      <Form className="calculator">
        <Row>
          <Col>
            <Form.Control />
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="secondary" block>
              (
            </Button>
          </Col>
          <Col>
            <Button variant="secondary" block>
              )
            </Button>
          </Col>
          <Col>
            <Button variant="secondary" block>
              %
            </Button>
          </Col>
          <Col>
            <Button variant="warning" block>
              CE
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light" block>
              7
            </Button>
          </Col>
          <Col>
            <Button variant="light" block>
              8
            </Button>
          </Col>
          <Col>
            <Button variant="light block" block>
              9
            </Button>
          </Col>
          <Col>
            <Button variant="secondary" block>
              /
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light" block>
              4
            </Button>
          </Col>
          <Col>
            <Button variant="light" block>
              5
            </Button>
          </Col>
          <Col>
            <Button variant="light block" block>
              6
            </Button>
          </Col>
          <Col>
            <Button variant="secondary" block>
              *
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light" block>
              1
            </Button>
          </Col>
          <Col>
            <Button variant="light" block>
              2
            </Button>
          </Col>
          <Col>
            <Button variant="light block" block>
              3
            </Button>
          </Col>
          <Col>
            <Button variant="secondary" block>
              -
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light" block>
              0
            </Button>
          </Col>
          <Col>
            <Button variant="light" block>
              .
            </Button>
          </Col>
          <Col>
            <Button variant="primary" block>
              =
            </Button>
          </Col>
          <Col>
            <Button variant="secondary" block>
              +
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default App;
