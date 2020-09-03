import React from "react";
import PropTypes from "prop-types";
import { MdEventSeat } from "react-icons/md";

export default function Seat({ targetClass, onSelect }) {
  return <MdEventSeat className={targetClass} onClick={onSelect} />;
}

Seat.propTypes = {
  targetClass: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};
