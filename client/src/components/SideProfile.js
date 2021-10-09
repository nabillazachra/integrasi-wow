import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userContext";

import Wow from "../assets/img/Icon.png";
import Zayn from "../assets/img/zayn.png";

import { API } from "../config/api";

export default function SideProfile() {
  const [state] = useContext(UserContext);

  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const response = await API.get("/user/" + state.user.id);
      setUser(response.data.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

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
        {user?.clientTransaction[0].userStatus === "Not Active" ? (
          <h6 className="fw-bold text-center text-danger">
            Not Subscribed Yet
          </h6>
        ) : (
          <h6 className="fw-bold text-center text-success">Subscribed</h6>
        )}
      </div>
    </>
  );
}
