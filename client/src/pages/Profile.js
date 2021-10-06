import React from "react";
import { Container, Col } from "react-bootstrap";

import Navigation from "../components/Navigation";
import ListData from "../components/ListData";
import ProfileCard from "../components/ProfileCard";

export default function Profile() {
  return (
    <>
      <Container>
        <Col>
          <Navigation />
        </Col>
        <Col>
          <div className="cont">
            <h1 className="ms-5 mb-5">Profile</h1>
            <ProfileCard />
            <div className="ms-5 mt-5">
              <h2 className="mb-5">List Book</h2>
              <ListData />
            </div>
          </div>
        </Col>
      </Container>
    </>
  );
}
