import React, { useContext, useEffect, useState } from "react";
import { Row, Col, Modal } from "react-bootstrap";
import { useHistory } from "react-router";
import { UserContext } from "../context/userContext";

import { API } from "../config/api";

function ModalSubscribe(props) {
  return (
    <>
      <Modal {...props} size="lg">
        <Modal.Body>
          <span className="text-danger w-50 text-center">
            Please make a payment to read the latest book
          </span>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default function ListData() {
  let history = useHistory();
  const [state] = useContext(UserContext);
  const [modalShow, setModalShow] = useState(false);

  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    try {
      const response = await API.get("/books");

      setBooks(response.data.data.books);
    } catch (error) {
      console.log(error);
    }
  };

  const [user, setUser] = useState(null);

  let isResponse = false;

  const getUser = async () => {
    try {
      const response = await API.get("/user/" + state.user.id);
      setUser(response.data.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  if (user?.clientTransaction.length <= 0) {
    isResponse = false;
  } else if (user?.clientTransaction[0].userStatus === "Not Active") {
    isResponse = false;
  } else {
    isResponse = true;
  }

  const handleMyList = (e) => {
    e.preventDefault();
    setModalShow(true);
  };

  useEffect(() => {
    getBooks();
    getUser();
  }, []);

  return (
    <>
      <Row>
        {books?.map((item, index) => (
          <Col key={index} className="mb-5">
            <img className="mb-3" src={item.cover} alt={item.title} />
            <p
              className="fw-bold p-e"
              onClick={
                !isResponse
                  ? handleMyList
                  : () => {
                      history.push("/detail-book/" + item.id);
                    }
              }
            >
              {item.title}
            </p>
            <span className="text-muted">{item.author}</span>
            <ModalSubscribe
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}
