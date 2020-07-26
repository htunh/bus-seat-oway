import React from "react";

import "./Seats.css";

const seats = (props) => {
  let attachedClasses = ["Seat"];
  let seatsList = props.seatsData.map((seatColumns, index) => {
    return (
      <div key={index} className="SeatsColumn">
        {seatColumns.map((seat) => {
          if (seat.value) {
            if (props.selectedSeats.indexOf(seat.value) !== -1) {
              attachedClasses = ["Seat", "activeSeat"];
            } else {
              attachedClasses = ["Seat", seat.status];
            }
            return (
              <button
                key={seat.id}
                className={attachedClasses.join(" ")}
                disabled={seat.status !== "Available" ? true : false}
                onClick={(event) => props.clicked(event, seat.value)}
              >
                <h3>{seat.value}</h3>
              </button>
            );
          } else {
            return <div key={seat.id} className="NoSeat"></div>;
          }
        })}
      </div>
    );
  });

  return (
    <div className="Card">
      <div className="SeatsRow">{seatsList}</div>
      <div className="SeatsStatus">
        <span className="Dot Available"></span> Available
        <span className="Dot Blocked"></span> Blocked
        <span className="Dot Booked"></span> Booked
        <span className="Dot BookedByLadies"></span> Booked By Ladies
      </div>
    </div>
  );
};

export default seats;
