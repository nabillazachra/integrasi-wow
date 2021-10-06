import React from "react";
import zayn from "../../../assets/img/zayn.png";
import { Dropdown } from "react-bootstrap";
import { MdBook } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

import { useHistory } from "react-router";

export default function NavDown() {
  let historyAddBook = useHistory();

  const handleAddBook = () => {
    historyAddBook.push("/add-book");
  };

  let historyLogout = useHistory();

  const handleLogout = () => {
    historyLogout.push("/");
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
            className="ava p-e"
            id="dropdown-basic"
            alt="avatar"
          />
        </Dropdown.Toggle>
        <Dropdown.Menu className="mb-5">
          <Dropdown.Item>
            <MdBook className="text-muted" />
            <span onClick={handleAddBook} className="ms-2 fw-bold">
              Add Book
            </span>
          </Dropdown.Item>
          <hr />
          <Dropdown.Item>
            <FiLogOut className="text-danger" />
            <span onClick={handleLogout} className="ms-2 fw-bold">
              Logout
            </span>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
