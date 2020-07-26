import React from "react";

import "./SeatsPreview.css";
import Button from "../../UI/Button/Button";

const seatsPreview = (props) => {
  let selectedSeats = props.seatsSelected.map((seat) => {
    return (
      <button key={seat} className="SelectedSeat">
        <h3>{seat}</h3>
      </button>
    );
  });
  return (
    <div className="SeatsPreview">
      <h3>
        Please select {props.seatsSelected.length >= 3 ? "0" : "3"}
        <strong style={{ color: "#3083ef" }}> Seats</strong>.
      </h3>
      <div className="PreviewCard">
        <div className="SelectedSeats">{selectedSeats}</div>
        <hr />
        <div className="SeatsPrice">
          <span style={{ color: "#9f9f9f" }}>Total Price: </span>
          <span style={{ color: "#3083ef" }}>
            {props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
              " Ks"}
          </span>
        </div>
      </div>
      <div style={{ textAlign: "center", margin: "10px"}}>
        <Button btnType="Primary">Continue Booking</Button>
      </div>
    </div>
  );
};

export default seatsPreview;
