import React, { useState, useContext } from "react";
import { Modal, Form, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import { UserContext } from "../context/userContext";

import { API, setAuthToken } from "../config/api";

function ModalLogin(props) {
  let history = useHistory();

  const [state, dispatch] = useContext(UserContext);

  const [message, setMessage] = useState(null);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginSubmit = async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify(form);

      const response = await API.post("/login", body, config);

      console.log(response);

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: response.data.data.user,
      });

      localStorage.setItem("token", response.data.data.user.token);
      setAuthToken(response.data.data.user.token);

      history.push(
        response.data.data.user.role === "admin" ? "/admin" : "/home"
      );

      const alert = (
        <Alert variant="success" className="py-1">
          Login success
        </Alert>
      );
      setMessage(alert);
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Login failed
        </Alert>
      );
      setMessage(alert);
      console.log(error);
    }
  };

  return (
    <div>
      <Modal {...props} centered size="sm">
        <Modal.Body>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="mb-4 fw-bold"
          >
            Sign In
          </Modal.Title>
          {message && message}
          <Form onSubmit={handleLoginSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                onChange={handleChange}
                type="email"
                name="email"
                id="email"
                value={email}
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Control
                onChange={handleChange}
                type="password"
                name="password"
                id="password"
                value={password}
                placeholder="Password"
              />
            </Form.Group>
            <button className="btn-reg auto w-100 mb-3" type="submit">
              Sign In
            </button>
            <p className="text-center">
              Don't have an account? Klik
              <span className="fw-bold p-e" onClick={props.onRedirectRegis}>
                &nbsp;Here
              </span>
            </p>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

function ModalRegister(props) {
  const [state, dispatch] = useContext(UserContext);

  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState(null);
  const { fullname, email, password } = form;

  const handleChange = async (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegistSubmit = async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify(form);

      const response = await API.post("/register", body, config);

      if (response.data.status == "success") {
        const alert = (
          <Alert variant="success" className="py-1">
            Register success, you can login now
          </Alert>
        );
        setMessage(alert);
      } else {
        const alert = (
          <Alert variant="danger" className="py-1">
            Failed
          </Alert>
        );
        setMessage(alert);
      }
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Failed
        </Alert>
      );
      setMessage(alert);
    }
  };

  return (
    <div>
      <Modal {...props} centered size="sm">
        <Modal.Body>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="mb-4 fw-bold"
          >
            Sign Up
          </Modal.Title>
          {message && message}
          <Form onSubmit={handleRegistSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                onChange={handleChange}
                name="email"
                value={email}
                type="email"
                id="email"
                placeholder="Email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                onChange={handleChange}
                name="password"
                type="password"
                id="password"
                value={password}
                placeholder="Password"
                required
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Control
                onChange={handleChange}
                name="fullname"
                type="fullname"
                id="fullname"
                value={fullname}
                placeholder="Fullname"
                required
              />
            </Form.Group>
            <button className="btn-reg auto w-100 mb-3" type="submit">
              Sign Up
            </button>
            <p className="text-center">
              Already have an account? Klik
              <span className="fw-bold p-e" onClick={props.onRedirectLogin}>
                &nbsp;Here
              </span>
            </p>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default function BtnGroup() {
  const [modalReg, setModalReg] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);

  const RedirectToLogin = () => {
    setModalReg(false);
    setModalLogin(true);
  };

  const RedirectToRegis = () => {
    setModalReg(true);
    setModalLogin(false);
  };

  return (
    <div className="btn-group">
      <button
        className="btn-reg radius ws fw-bold"
        onClick={() => setModalReg(true)}
      >
        Sign Up
      </button>
      <ModalRegister
        show={modalReg}
        onHide={() => setModalReg(false)}
        onRedirectLogin={RedirectToLogin}
      />
      <button
        className="btn-login radius ws fw-bold"
        onClick={() => setModalLogin(true)}
      >
        Sign In
      </button>
      <ModalLogin
        show={modalLogin}
        onHide={() => setModalLogin(false)}
        onRedirectRegis={RedirectToRegis}
      />
    </div>
  );
}
