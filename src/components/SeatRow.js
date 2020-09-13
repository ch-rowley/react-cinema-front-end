import React from "react";
import PropTypes from "prop-types";
import SeatIcon from "./SeatIcon";

export default function SeatRow({ row, width, reserved, booking, onSelect }) {
  const seatStatus = function (target) {
    if (reserved.includes(target)) return "reserved";
    if (booking.includes(target)) return "booking";
    return "available";
  };
  return (
    <>
      {[...Array(width)].map((_, col) => (
        <SeatIcon
          key={[col, row]}
          targetClass={seatStatus(col)}
          onSelect={() => onSelect([col, row])}
        />
      ))}
    </>
  );
}

SeatRow.propTypes = {
  row: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  reserved: PropTypes.arrayOf(PropTypes.number).isRequired,
  booking: PropTypes.arrayOf(PropTypes.number).isRequired,
  onSelect: PropTypes.func.isRequired,
};
