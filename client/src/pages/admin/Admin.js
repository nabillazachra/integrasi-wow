import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import List from "./components/List";
import NavBarAdmin from "./components/NavBarAdmin";

export default function Admin() {
  return (
    <>
      <Container fluid>
        <Row className="d-flex flex-column">
          <Col>
            <NavBarAdmin />
          </Col>
          <Col className="p-3">
            <h2 className="mb-5 fw-bold">Incoming Transaction</h2>
            <List />
          </Col>
        </Row>
      </Container>
    </>
  );
}
