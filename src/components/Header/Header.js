import React from "react";

import "./Header.css";
import Logo from "../Logo/Logo";
import busImage from "../../assets/images/bus.jpg";
import Button from "../UI/Button/Button";

const header = (props) => (
  <div className="Header">
    <div className="BusLogo">
      <Logo />
      <div className="BusStatus">
        <strong>Shwe Sin Set Kyar</strong>
        <span className="BusBadge">vip</span>
      </div>
    </div>
    <div className="BusTime">
      <strong>6:00</strong>
      <div className="LastTime">
        <div style={{ margin: "-13px 0" }}>
          <img src={busImage} alt="Bus" width="40" />
        </div>
        <div className="BusRoute"></div>
        <strong style={{ color: "#777777" }}>10 hrs 10 mins</strong>
      </div>
      <strong>15:25</strong>
    </div>
    <hr />
    <div className="TicketPrice">
      <div className="PricePerTicket">
        <span>per ticket</span>
        <h2>MMK 20,000</h2>
        <del>MMK 21,000</del>
      </div>
      <div>
        <Button btnType="Primary">Hide</Button>
      </div>
    </div>
  </div>
);

export default header;
