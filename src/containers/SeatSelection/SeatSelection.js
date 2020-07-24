import React, { Component } from "react";
import { connect } from "react-redux";

import "./SeatSelection.css";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Seats from "../../components/Seats/Seats";
import SeatsPreview from "../../components/Seats/SeatsPreview/SeatsPreview";
import * as actions from "../../store/actions/index";

class SeatSelection extends Component {
  componentDidMount() {
    this.props.onInitSeats();
  }

  seatClickedHandler = (event, seatNo) => {
    event.preventDefault();
    this.props.onSelectSeat(seatNo);
    // let updatedSelectedSeats = [...this.state.selectedSeats];

    // if (updatedSelectedSeats.indexOf(seatNo) === -1) {
    //   updatedSelectedSeats.push(seatNo);
    // } else {
    //   const position = updatedSelectedSeats.indexOf(seatNo);
    //   updatedSelectedSeats.splice(position, 1);
    // }

    // let updatedTotalPrice = this.state.seatPrice * updatedSelectedSeats.length;
    // console.log(updatedSelectedSeats)
    // this.setState({
    //   selectedSeats: updatedSelectedSeats,
    //   totalPrice: updatedTotalPrice,
    // });
  };

  render() {
    return (
      <Auxiliary>
        <div className="SeatSelection">
          <Seats
            seatsData={this.props.seatsData}
            selectedSeats={this.props.selectedSeats}
            clicked={this.seatClickedHandler}
          />
          <SeatsPreview
            seatsSelected={this.props.selectedSeats}
            price={this.props.totalPrice}
          />
        </div>
      </Auxiliary>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    seatsData: state.seatSelection.seatsData,
    selectedSeats: state.seatSelection.selectedSeats,
    totalPrice: state.seatSelection.totalPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitSeats: () => dispatch(actions.initSeats()),
    onSelectSeat: (seatNo) => dispatch(actions.selectSeat(seatNo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeatSelection);
