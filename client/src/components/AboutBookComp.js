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

  const [myList, setMyList] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const check = async () => {
    try {
      const check = await API.get("/book-list");
      const booleanCheck = check.data.data.list.filter((item) => {
        return item.id === +id;
      });
      booleanCheck.length > 0 ? setIsChecked(true) : setIsChecked(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddMyList = async () => {
    try {
      const body = {
        bookId: id,
      };
      const res = await API.post("/book-list", body);
      setMyList(res.data.data.list);
    } catch (error) {
      console.log(error);
    }

    history.push("/profile");
  };

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
    check();
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
          {isChecked ? null : (
            <button onClick={handleAddMyList} className="btn-reg auto me-2">
              Add My List <BsBookmark />
            </button>
          )}
          <button className="btn-secondary auto" onClick={handleReadBook}>
            Read Book <AiOutlineRight />
          </button>
        </div>
      </div>
    </>
  );
}
