import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ReactReader } from "react-reader";
import { useParams } from "react-router";

import { API } from "../config/api";

import NavBar from "../components/NavBar";

export default function ReadBook() {
  const [location, setLocation] = useState(null);
  const locationChanged = (epubcifi) => {
    setLocation(epubcifi);
  };

  let { id } = useParams();

  const [book, setBook] = useState(null);

  const getBook = async () => {
    try {
      const response = await API.get("/book/" + id);
      setBook(response.data.data.book);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBook();
  }, []);
  return (
    <>
      <Container>
        <Row className="d-flex flex-column">
          <Col className="mb-5">
            <NavBar />
          </Col>
          <Col className="w-100 m-auto">
            <ReactReader
              location={location}
              locationChanged={locationChanged}
              url={book?.bookFile}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
