import React, { useState, useEffect } from "react";
// import books from "../data/bookData";
import { useParams } from "react-router-dom";

import { API } from "../config/api";

export default function DetailBookComp() {
  const [book, setBook] = useState(null);

  let { id } = useParams();

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
  });

  return (
    <>
      <div className="d-flex">
        <div className="me-5">
          <img
            src={book?.cover}
            alt="book"
            className="mb-5"
            style={{ width: "300px" }}
          />
        </div>
        <div className="d-flex flex-column justify-content-sm-beetween">
          <div className="mb-3">
            <h1>{book?.title}</h1>
            <p className="text-muted">{book?.author}</p>
          </div>
          <div className="mb-3">
            <p className="fw-bold">Publication date</p>
            <p className="text-muted">{book?.publicationDate}</p>
          </div>
          <div className="mb-3">
            <p className="fw-bold">Pages</p>
            <p className="text-muted">{book?.pages}</p>
          </div>
          <div className="mb-3">
            <p className="fw-bold text-danger">ISBN</p>
            <p className="text-muted">{book?.isbn}</p>
          </div>
        </div>
      </div>
    </>
  );
}
