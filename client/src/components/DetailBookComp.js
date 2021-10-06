import React, { useState, useEffect } from "react";
import books from "../data/bookData";
import { useParams } from "react-router-dom";

export default function DetailBookComp() {
  const [data, setData] = useState(null);

  let { id } = useParams();

  useEffect(() => {
    if (books.length > 0) {
      const book = books.find((item) => item.id === parseInt(id));
      setData(book);
    }
    console.log(books);
  }, [id]);

  return (
    <>
      <div className="d-flex">
        <div className="me-5">
          <img
            src={data?.image}
            alt="book"
            className="mb-5"
            style={{ width: "300px" }}
          />
        </div>
        <div className="d-flex flex-column justify-content-sm-beetween">
          <div className="mb-3">
            <h1>{data?.title}</h1>
            <p className="text-muted">{data?.author}</p>
          </div>
          <div className="mb-3">
            <p className="fw-bold">Publication date</p>
            <p className="text-muted">{data?.date}</p>
          </div>
          <div className="mb-3">
            <p className="fw-bold">Pages</p>
            <p className="text-muted">{data?.pages}</p>
          </div>
          <div className="mb-3">
            <p className="fw-bold text-danger">ISBN</p>
            <p className="text-muted">{data?.isbn}</p>
          </div>
        </div>
      </div>
    </>
  );
}
