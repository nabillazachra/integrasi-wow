import React from "react";
import { Container, Col } from "react-bootstrap";

//component imp
import Navigation from "../components/Navigation";
import DetailBookComp from "../components/DetailBookComp";
import AboutBookComp from "../components/AboutBookComp";

export default function DetailBook() {
  return (
    <>
      <Container>
        <Col>
          <Navigation />
        </Col>
        <Col>
          <div className="cont">
            <div className="ms-5 mt-5 mb-5">
              <DetailBookComp />
              <AboutBookComp />
            </div>
          </div>
        </Col>
      </Container>
    </>
  );
}
