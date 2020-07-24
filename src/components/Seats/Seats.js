import React from "react";

import "./Seats.css";

const seats = (props) => {
  let seatsList = props.seatsData.map((seatColumns, index) => {
    return (
      <div key={index} className="SeatsColumn">
        {seatColumns.map((seat) => {
          if (seat.value) {
            return (
              <div
                key={seat.id}
                className={
                  props.selectedSeats.indexOf(seat.value) !== -1
                    ? "Seat activeSeat"
                    : "Seat"
                }
                onClick={(event) => props.clicked(event, seat.value)}
              >
                <h3>{seat.value}</h3>
              </div>
            );
          } else {
            return <div key={seat.id} className="NoSeat"></div>;
          }
        })}
      </div>
    );
  });

  return <div className="Seats">{seatsList}</div>;
};

export default seats;
