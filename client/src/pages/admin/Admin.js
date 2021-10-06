import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import List from "./components/List";
import NavBarAdmin from "./components/NavBarAdmin";

export default function Admin() {
  return (
    <>
      <Container>
        <Row className="d-flex flex-column">
          <Col className="mb-5">
            <NavBarAdmin />
          </Col>
          <Col>
            <h2 className="mb-5">Incoming Transaction</h2>
            <List />
          </Col>
        </Row>
      </Container>
    </>
  );
}
