import React, { useState } from "react";
import { Container, Col, Form, Card, Modal } from "react-bootstrap";
import Navigation from "../components/Navigation";
import Wow from "../assets/img/Wow.png";
import Attach from "../assets/img/Vector.png";

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
  const [modalShow, setModalShow] = useState(false);
  const [subscibeState, setSubscribeState] = useState({
    account: "",
  });

  const handleSubscribeChange = (e) => {
    setSubscribeState({
      ...subscibeState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubscibeSubmit = (e) => {
    e.preventDefault();
    setModalShow(true);
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
              <Form className="mt-3">
                <Form.Group className="mb-3">
                  <Form.Control
                    onChange={handleSubscribeChange}
                    type="text"
                    name="account"
                    placeholder="Input your account number"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control type="file" name="file" hidden id="file" />
                  <label for="file">
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
                <button
                  onClick={handleSubscibeSubmit}
                  className="btn-reg auto w-100 mt-5"
                  type="submit"
                >
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
