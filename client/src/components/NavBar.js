import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Wow from "../assets/img/Icon.png";
import zayn from "../assets/img/zayn.png";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <section>
              <nav className="d-flex mt-3 flex-row justify-content-between">
                <Link to="/home">
                  <img src={Wow} className="wow rotate" alt="home" />
                </Link>
                <div>
                  <img src={zayn} className="ava" alt="avatar" />
                </div>
              </nav>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
}
