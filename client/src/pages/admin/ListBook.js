import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavBarAdmin from "./components/NavBarAdmin";
import { API } from "../../config/api";

export default function ListBook() {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    try {
      const response = await API.get("/books");

      setBooks(response.data.data.books);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBooks();
  }, [books]);
  return (
    <>
      <Container fluid>
        <Row className="d-flex flex-column">
          <Col>
            <NavBarAdmin />
          </Col>
          <Col>
            <h2 className="ms-3 mt-5 fw-bold">List Book</h2>
            <Row className="ms-3 mt-5">
              {books?.map((item, index) => (
                <Col key={index} className="mb-5">
                  <img className="mb-3" src={item.cover} alt={item.title} />
                  <p className="fw-bold p-e">{item.title}</p>
                  <span className="text-muted">{item.author}</span>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
