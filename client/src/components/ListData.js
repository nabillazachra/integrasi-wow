import React, { useContext, useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router";
import { UserContext } from "../context/userContext";

import { API } from "../config/api";

export default function ListData() {
  let history = useHistory();
  const [state] = useContext(UserContext);

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
  }, []);

  return (
    <>
      <Row>
        {books?.map((item, index) => (
          <Col key={index} className="mb-5">
            <img
              className="mb-3 w-50 h-50"
              src={item.bookFile}
              alt={item.title}
            />
            <p
              className="fw-bold p-e"
              onClick={() => {
                history.push("/detail-book/" + item.id);
              }}
            >
              {item.title}
            </p>
            <span className="text-muted">{item.author}</span>
          </Col>
        ))}
      </Row>
    </>
  );
}
