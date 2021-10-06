import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import NavBar from "../components/NavBar";
import FormEditProfile from "../components/FormEditProfile";

export default function EditProfile() {
  return (
    <>
      <Container>
        <Row className="d-flex flex-column">
          <Col className="mb-5">
            <NavBar />
          </Col>
          <Col className="w-100">
            <div className="ms-5 w-80 mb-5">
              <section className="mb-5">
                <h2>Edit Profile</h2>
              </section>
              <section>
                <FormEditProfile />
              </section>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
