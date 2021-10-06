import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { UserContext } from "../context/userContext";

import User from "../assets/img/user.png";
import bill from "../assets/img/bill.png";
import logout from "../assets/img/logout.png";

import SideProfile from "../components/SideProfile";

export default function Navigation() {
  const [state, dispatch] = useContext(UserContext);
  console.log(state);

  let history = useHistory();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch({
      type: "LOGOUT",
    });
    history.push("/");
  };

  return (
    <div className="sidebar mr-tm bg-transparent hover">
      <SideProfile />
      <nav>
        <ul className="d-flex flex-column justify-content-evenly">
          <hr />
          <div>
            <Link
              className="list-group-item mt-2 mb-4 border-0 bg-transparent"
              to="/profile"
            >
              <img className="icon" src={User} alt="user" />{" "}
              <span className="ms-3 text-secondary">Profile</span>
            </Link>
            <Link
              className="list-group-item mt-2 mb-4 border-0 bg-transparent"
              to="/subscribe"
            >
              <img className="icon" src={bill} alt="subs" />{" "}
              <span className="ms-3 text-secondary">Subscribe</span>
            </Link>
            <hr />
            <Link
              className="list-group-item mt-2 mb-4 border-0 bg-transparent"
              onClick={handleLogout}
            >
              <img className="icon" src={logout} alt="subs" />{" "}
              <span className="ms-3 text-secondary">Logout</span>
            </Link>
          </div>
        </ul>
      </nav>
    </div>
  );
}
