import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import pdf from "../assets/img/books/ss.png";

import NavBar from "../components/NavBar";

export default function ReadBook() {
  return (
    <>
      <Container>
        <Row className="d-flex flex-column">
          <Col className="mb-5">
            <NavBar />
          </Col>
          <Col>
            <img className="w-100 m-auto" src={pdf} alt="pdf" />
          </Col>
        </Row>
      </Container>
    </>
  );
}
