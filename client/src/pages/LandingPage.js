import React from "react";
import Logo from "../assets/img/Icon.png";
import ModalGroups from "../components/ModalGroups";

export default function landingPage() {
  return (
    <div className="landing">
      <div className="left-section">
        <img className="logo" src={Logo} alt="" />
        <p className="text-landing">
          Sign-up now and subscribe to enjoy all the cool
          <br />
          and latest books - The best book rental service
          <br />
          provider in Indonesia
        </p>
        <ModalGroups />
      </div>
    </div>
  );
}
