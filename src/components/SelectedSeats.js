import React from "react";
import PropTypes from "prop-types";
import Price from "./Price.js";

export default function SelectedSeats({ booking = [], price = 0 }) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const rowLetter = (n) =>
    letters[n % letters.length].repeat(Math.floor(n / letters.length) + 1);
  return (
    <>
      <div>
        {booking.length ? "Selected seats: " : "Please select your seats."}
        {booking.map((item, index) => (
          <span key={item}>
            {rowLetter(item[0])}
            {item[1]}
            {index < booking.length - 1 ? ", " : "."}
          </span>
        ))}
      </div>
      {!!booking.length && (
        <div>
          Price: <Price>{price}</Price>
        </div>
      )}
    </>
  );
}

SelectedSeats.propTypes = {
  booking: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  price: PropTypes.number,
};
