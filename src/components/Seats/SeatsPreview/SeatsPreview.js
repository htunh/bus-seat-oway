import React from "react";

import "./SeatsPreview.css";

const seatsPreview = (props) => {
  let selectedSeats = props.seatsSelected.map((seat) => {
    return (
      <div key={seat} className="SelectedSeat">
        <h3>{seat}</h3>
      </div>
    );
  });
  return (
    <div className="SeatsPreview">
      <h3>
        Please select {props.seatsSelected.length >= 3 ? "0" : "3"} seats.
      </h3>
      <div className="PreviewCard">
        <div className="SelectedSeats">{selectedSeats}</div>
        <hr />
        <div className="SeatsPrice">
          <span>Total Price: </span>
          <span>
            {props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default seatsPreview;
