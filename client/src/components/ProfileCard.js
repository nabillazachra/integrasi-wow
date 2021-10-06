import React, { useContext } from "react";
import { Card, Row } from "react-bootstrap";

import Zayn from "../assets/img/zayn.png";
import { AiOutlineMail } from "react-icons/ai";
import { FaTransgender } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { useHistory } from "react-router";

import { UserContext } from "../context/userContext";

export default function ProfileCard() {
  let historyEditProfile = useHistory();
  const handleEditProfile = () => {
    historyEditProfile.push("/edit-profile");
  };

  const [state] = useContext(UserContext);

  return (
    <>
      <Card className="ms-5 mt-3 bg w-100">
        <Card.Body className="d-flex justify-content-between">
          <div>
            <Row className="ms-1 mt-3 mb-3">
              <div className="d-flex">
                <div className="me-3">
                  <AiOutlineMail className="mt-2" size={30} />
                </div>
                <div>
                  <p className="fw-bold">{state.user.email}</p>
                  <span className="text-muted">Email</span>
                </div>
              </div>
            </Row>
            <Row className="ms-1 mt-3 mb-3">
              <div className="d-flex">
                <div className="me-3">
                  <FaTransgender className="mt-2" size={30} />
                </div>
                <div>
                  <p className="fw-bold">Male</p>
                  <span className="text-muted">Gender</span>
                </div>
              </div>
            </Row>
            <Row className="ms-1 mt-3 mb-3">
              <div className="d-flex">
                <div className="me-3">
                  <FaPhoneAlt className="mt-2" size={30} />
                </div>
                <div>
                  <p className="fw-bold">0812-8623-8911</p>
                  <span className="text-muted">Mobile phone</span>
                </div>
              </div>
            </Row>
            <Row className="ms-1 mt-3 mb-3">
              <div className="d-flex">
                <div className="me-3">
                  <IoLocationSharp className="mt-2" size={30} />
                </div>
                <div>
                  <p className="fw-bold">
                    Perumahan Permata Bintaro Residence C-3
                  </p>
                  <span className="text-muted">Address</span>
                </div>
              </div>
            </Row>
          </div>
          <div className="mt-4 text-end">
            <img className="w-75" src={Zayn} alt="ava" />
            <button
              onClick={handleEditProfile}
              className="btn-reg auto w-75 mt-3"
              type="button"
            >
              Edit Profile
            </button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
