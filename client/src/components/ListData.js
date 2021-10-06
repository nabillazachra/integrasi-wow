import React from "react";
import { Row, Col } from "react-bootstrap";
import books from "../data/bookData";
import { useHistory } from "react-router";

export default function ListData() {
  let history = useHistory();

  return (
    <>
      <Row>
        {books.map((data, index) => (
          <Col key={index} className="mb-5">
            <img className="mb-3" src={data.image} alt={data.title} />
            <p
              className="fw-bold p-e"
              onClick={() => {
                history.push("/detail-book/" + data.id);
              }}
            >
              {data.title}
            </p>
            <span className="text-muted">{data.author}</span>
          </Col>
        ))}
      </Row>
    </>
  );
}
