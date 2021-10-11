import React, { useContext, useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router";
import { UserContext } from "../context/userContext";

import { API } from "../config/api";

export default function ListData() {
  let history = useHistory();
  const [state] = useContext(UserContext);

  const [book, setBooks] = useState([]);

  const getBooks = async () => {
    try {
      const response = await API.get("/book-list/" + state.user.id);

      setBooks(response.data.data.list);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  let test = book.map((item) => {
    return item;
  });

  console.log(test);

  const handleMyList = (e) => {
    e.preventDefault();
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
