import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
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
      <div>
        <div className="d-flex flex-column">
          <div className="mb-5">
            <NavBar />
          </div>
          <div style={{ position: "relative", height: "100vh" }}>
            <ReactReader
              location={location}
              locationChanged={locationChanged}
              url={book?.bookFile}
            />
          </div>
        </div>
      </div>
    </>
  );
}
