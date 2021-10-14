import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router";

import { API } from "../config/api";

export default function ListData() {
  let history = useHistory();

  const [book, setBooks] = useState([]);

  const getBooks = async () => {
    try {
      const response = await API.get("/book-list");

      setBooks(response.data.data.list);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      <Row>
        {book?.map((item, index) => (
          <Col key={index} className="mb-5">
            <img
              className="mb-3"
              src={`http://localhost:5000/uploads/${item.books.cover}`}
              alt={item.books.title}
            />
            <p
              className="fw-bold p-e"
              onClick={() => {
                history.push("/detail-book/" + item.books.id);
              }}
            >
              {item.books.title}
            </p>
            <span className="text-muted">{item.books.author}</span>
          </Col>
        ))}
      </Row>
    </>
  );
}
