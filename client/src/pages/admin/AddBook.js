import React from "react";
import NavBarAdmin from "./components/NavBarAdmin";
import FormAddBook from "./components/FormAddBook";
import { Container, Row, Col } from "react-bootstrap";

export default function AddBook() {
  return (
    <>
      <Container>
        <Row className="d-flex flex-column">
          <Col className="mb-5">
            <NavBarAdmin />
          </Col>
          <Col className="w-100">
            <div className="ms-5 w-80 mb-5">
              <section className="mb-5">
                <h2>Add Book</h2>
              </section>
              <section>
                <FormAddBook />
              </section>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
