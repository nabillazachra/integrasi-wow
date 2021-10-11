import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";

import { API } from "../config/api";

import { BsBookmark } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";

export default function AboutBookComp() {
  let history = useHistory();

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

  const handleReadBook = () => {
    history.push("/read-book/" + id);
  };

  return (
    <>
      <div className="mb-5">
        <h2 className="mb-3">About This Book</h2>
        <p className="text-muted text-wrap">{book?.about}</p>
        <div className="text-end mt-5">
          <button className="btn-reg auto me-2">
            Add My List <BsBookmark />
          </button>
          <button className="btn-secondary auto" onClick={handleReadBook}>
            Read Book <AiOutlineRight />
          </button>
        </div>
      </div>
    </>
  );
}
