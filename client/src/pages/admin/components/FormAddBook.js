import React, { useContext, useState } from "react";
import { IoMdAttach } from "react-icons/io";
import { MdBook } from "react-icons/md";
import { Card } from "react-bootstrap";

import { API } from "../../../config/api";
import { useHistory } from "react-router";
import { UserContext } from "../../../context/userContext";

export default function FormAddBook() {
  let history = useHistory();
  const [state] = useContext(UserContext);

  const [preview, setPreview] = useState(null);
  const [form, setForm] = useState({
    title: "",
    publicationDate: "",
    pages: "",
    author: "",
    isbn: "",
    about: "",
    bookFile: "",
    userId: state.user.id,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };

      const formData = new FormData();
      formData.set("title", form.title);
      formData.set("publicationDate", form.publicationDate);
      formData.set("pages", form.pages);
      formData.set("author", form.author);
      formData.set("isbn", form.isbn);
      formData.set("about", form.about);
      formData.set("bookFile", form.bookFile[0], form.bookFile[0].name);

      const response = await API.post("/book", formData, config);
      console.log(response);

      history.push("/admin");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="title"
            onChange={handleChange}
            className="form-control"
            placeholder="Title"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="publicationDate"
            onChange={handleChange}
            className="form-control"
            placeholder="Publication Date"
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            name="pages"
            onChange={handleChange}
            className="form-control"
            placeholder="Pages"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="author"
            onChange={handleChange}
            className="form-control"
            placeholder="Author"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="isbn"
            onChange={handleChange}
            className="form-control"
            placeholder="ISBN"
          />
        </div>
        <div className="mb-3">
          <textarea
            name="about"
            onChange={handleChange}
            className="form-control"
            placeholder="About This Book"
            rows="3"
          ></textarea>
        </div>
        <div>
          <label htmlFor="file">
            <input
              type="file"
              name="bookFile"
              hidden
              id="file"
              onChange={handleChange}
            />
            <Card style={{ height: "40px", width: "15rem" }}>
              <Card.Body style={{ marginTop: "-10px" }}>
                <span className="me-5 text-muted fw-bold p-e">
                  Image
                  <IoMdAttach size={20} className="text-muted fw-bold" />
                </span>
              </Card.Body>
            </Card>
          </label>
          {preview && (
            <div className="mt-3 mb-3">
              <img
                src={preview}
                style={{
                  maxWidth: "150px",
                  maxHeight: "150px",
                  objectFit: "cover",
                }}
                alt="preview"
              />
            </div>
          )}
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
