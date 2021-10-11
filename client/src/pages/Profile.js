import React from "react";
import { Container, Col } from "react-bootstrap";

import Navigation from "../components/Navigation";
import MyList from "../components/MyList";
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
            <h1 className="ms-5 mb-5 fw-bold">Profile</h1>
            <ProfileCard />
            <div className="ms-5 mt-5">
              <h2 className="mb-5 fw-bold">List Book</h2>
              <MyList />
            </div>
          </div>
        </Col>
      </Container>
    </>
  );
}
