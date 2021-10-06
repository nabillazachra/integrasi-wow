import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userContext";

import Wow from "../assets/img/Icon.png";
import Zayn from "../assets/img/zayn.png";

export default function SideProfile() {
  const [state] = useContext(UserContext);

  return (
    <>
      <div className="text-center">
        <Link to="/home">
          <img src={Wow} className="wow rotate" alt="home" />
        </Link>
      </div>
      <div className="text-center">
        <img src={Zayn} className="ava" alt="avatar" />
      </div>
      <div className="d-flex flex-column mt-3">
        <h4 className="text-center fw-bold mb-2">{state.user.fullname}</h4>
        <h6 className="text-center text-danger">Not Subscribed Yet</h6>
      </div>
    </>
  );
}
