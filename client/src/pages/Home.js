import React from "react";
import { Container, Col, Row } from "react-bootstrap";

//components
import Navigation from "../components/Navigation";
import ListData from "../components/ListData";
import Subs from "../assets/img/Frame1.png";

export default function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <Navigation />
        </Col>
        <Col>
          <div className="cont">
            <img className="mb-5" src={Subs} alt="subscribe" />
            <h2 className="mb-5">List Book</h2>
            <ListData />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
