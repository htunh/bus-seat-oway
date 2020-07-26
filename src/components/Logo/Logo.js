import React from "react";
import busLogo from "../../assets/images/bus-logo.jpg";
import "./Logo.css";

const logo = (props) => (
  <div className="Logo">
    <img src={busLogo} alt="Bus Logo" />
  </div>
);

export default logo;
