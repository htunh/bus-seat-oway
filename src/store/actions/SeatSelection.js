import * as actionTypes from "./actionTypes";
import MOCK_SEATS from "../../mock/SeatsData";

export const setSeats = (seatsData) => {
  return {
    type: actionTypes.SET_SEATS,
    seatsData: seatsData,
  };
};

export const initSeats = () => {
  return (dispatch) => {
    const seatsData = MOCK_SEATS;
    dispatch(setSeats(seatsData));
  };
};

export const selectSeat = (seatNo) => {
  return {
    type: actionTypes.SELECT_SEAT,
    seatNo: seatNo,
  };
};
