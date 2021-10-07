import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";

import { API } from "../config/api";

import { BsBookmark } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";

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

export default function AboutBookComp() {
  let history = useHistory();
  const [modalShow, setModalShow] = useState(false);

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
  });

  const handleReadBook = () => {
    history.push("/read-book");
  };

  const handleMyList = (e) => {
    e.preventDefault();
    setModalShow(true);
  };

  return (
    <>
      <div className="mb-5">
        <h2 className="mb-3">About This Book</h2>
        <p className="text-muted text-wrap">{book?.about}</p>
        <div className="text-end mt-5">
          <button onClick={handleMyList} className="btn-reg auto me-2">
            Add My List <BsBookmark />
          </button>
          <button className="btn-secondary auto" onClick={handleReadBook}>
            Read Book <AiOutlineRight />
          </button>
          <ModalSubscribe show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      </div>
    </>
  );
}
