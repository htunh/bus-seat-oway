import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  seatsData: [[]],
  selectedSeats: [],
  seatPrice: 20000,
  totalPrice: 0,
};

const setSeats = (state, action) => {
  const items = [...action.seatsData];
  const result = new Array(Math.ceil(items.length / 5))
    .fill()
    .map((_) => items.splice(0, 5));
  return updateObject(state, { seatsData: result });
};

const selectSeat = (state, action) => {
  let updatedSelectedSeats = [...state.selectedSeats];

  if (updatedSelectedSeats.indexOf(action.seatNo) === -1) {
    updatedSelectedSeats.push(action.seatNo);
  } else {
    const position = updatedSelectedSeats.indexOf(action.seatNo);
    updatedSelectedSeats.splice(position, 1);
  }

  updatedSelectedSeats.sort();

  let updatedTotalPrice = state.seatPrice * updatedSelectedSeats.length;

  return updateObject(state, {
    selectedSeats: updatedSelectedSeats,
    totalPrice: updatedTotalPrice,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SEATS:
      return setSeats(state, action);
    case actionTypes.SELECT_SEAT:
      return selectSeat(state, action);
    default:
      return state;
  }
};

export default reducer;
