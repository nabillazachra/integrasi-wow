import React, { useContext } from "react";
import zayn from "../../../assets/img/zayn.png";
import { Dropdown } from "react-bootstrap";
import { MdBook } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { BsFillBookmarksFill } from "react-icons/bs";

import { useHistory } from "react-router";

import { UserContext } from "../../../context/userContext";

export default function NavDown() {
  let historyAddBook = useHistory();

  const handleAddBook = () => {
    historyAddBook.push("/add-book");
  };

  let historyLogout = useHistory();

  const [state, dispatch] = useContext(UserContext);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch({
      type: "LOGOUT",
    });
    historyLogout.push("/");
  };

  let historyList = useHistory();

  const handlePushList = () => {
    historyList.push("/admin-book");
  };

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <span
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </span>
  ));
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
          <img
            src={zayn}
            className="ava p-e mb-5"
            id="dropdown-basic"
            alt="avatar"
          />
        </Dropdown.Toggle>
        <Dropdown.Menu className="mb-5">
          <Dropdown.Item>
            <MdBook className="text-muted" />
            <span onClick={handleAddBook} className="text-muted ms-2 fw-bold">
              Add Book
            </span>
          </Dropdown.Item>
          <hr />
          <Dropdown.Item>
            <BsFillBookmarksFill className="text-success" />
            <span
              onClick={handlePushList}
              className="text-success ms-2 fw-bold"
            >
              Book List
            </span>
          </Dropdown.Item>
          <hr />
          <Dropdown.Item>
            <FiLogOut className="text-danger" />
            <span onClick={handleLogout} className="text-danger ms-2 fw-bold">
              Logout
            </span>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
