import React from "react";
import { IoMdAttach } from "react-icons/io";
import { MdBook } from "react-icons/md";
import { Card } from "react-bootstrap";

export default function FormAddBook() {
  return (
    <>
      <form>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Title" />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Publication Date"
          />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Pages" />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Author" />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="ISBN" />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="About This Book"
            rows="3"
          ></textarea>
        </div>
        <div>
          <label for="file">
            <Card style={{ height: "40px", width: "15rem" }}>
              <Card.Body style={{ marginTop: "-10px" }}>
                <span className="me-5 text-muted fw-bold p-e">
                  Image
                  <IoMdAttach size={20} className="text-muted fw-bold" />
                </span>
              </Card.Body>
            </Card>
          </label>
          <div className="mb-5 mt-2 text-end">
            <button type="submit" className="btn-reg auto">
              Add Book
              <MdBook className="ms-2" />
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
