import React, { useContext, useState } from "react";
import { Container, Col, Form, Card, Modal } from "react-bootstrap";
import Navigation from "../components/Navigation";
import Wow from "../assets/img/Wow.png";
import Attach from "../assets/img/Vector.png";

import { API } from "../config/api";
import { UserContext } from "../context/userContext";
import { useHistory } from "react-router";

function ModalSuccess(props) {
  return (
    <>
      <Modal {...props} size="lg">
        <Modal.Body>
          <span className="text-success w-50 text-center">
            Thank you for subscribing to premium, your premium package will be
            active after our admin approves your transaction, thank you!
          </span>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default function Subscribe() {
  let history = useHistory();
  const [modalShow, setModalShow] = useState(false);
  const [state] = useContext(UserContext);

  const [preview, setPreview] = useState(null);
  const [form, setForm] = useState({
    accountNumber: "",
    transferProof: "",
    userId: state.user.id,
  });

  const handleSubscribeChange = (e) => {
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

  const handleSubscibeSubmit = async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };

      const formData = new FormData();
      formData.set("accountNumber", form.accountNumber);
      formData.set(
        "transferProof",
        form.transferProof[0],
        form.transferProof[0].name
      );

      const response = await API.post("/transaction", formData, config);
      // console.log(response);

      setModalShow(true);
      history.push("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <Col>
          <Navigation />
        </Col>
        <Col>
          <div className="cont text-center">
            <div className="dc text-center">
              <h1 className="mb-5">Premium</h1>
              <p>
                Pay now and access all the latest books from
                <img src={Wow} alt="" />
              </p>
              <span>
                <img src={Wow} alt="" />
                <span className="fw-bold">: 0981312323</span>
              </span>
              <Form onSubmit={handleSubscibeSubmit} className="mt-3">
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    onChange={handleSubscribeChange}
                    name="accountNumber"
                    placeholder="Input your account number"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    onChange={handleSubscribeChange}
                    type="file"
                    name="transferProof"
                    hidden
                    id="file"
                  />
                  <label htmlFor="file">
                    <Card style={{ height: "40px", width: "25rem" }}>
                      <Card.Body style={{ marginTop: "-10px" }}>
                        <span className="me-5 text-start text-danger fw-bold p-e">
                          Attache proof of transfer
                        </span>
                        <span className="ms-5">
                          <img src={Attach} alt="" />
                        </span>
                      </Card.Body>
                    </Card>
                  </label>
                </Form.Group>
                {preview && (
                  <div>
                    <img
                      className="mt-5"
                      src={preview}
                      style={{
                        maxWidth: "300px",
                        maxHeight: "300px",
                        objectFit: "cover",
                      }}
                      alt="preview"
                    />
                  </div>
                )}
                <button className="btn-reg auto w-100 mt-5" type="submit">
                  Send
                </button>
                <ModalSuccess
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </Form>
            </div>
          </div>
        </Col>
      </Container>
    </>
  );
}
