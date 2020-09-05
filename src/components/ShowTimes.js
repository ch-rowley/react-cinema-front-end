import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function ShowTimes({ showings = [] }) {
  const base = "http://pathtoserver/";
  return (
    <>
      <div>{showings.length ? "Showtimes:" : "No showings scheduled."}</div>
      <div>
        {showings.map(({ showingID, showTime }) => (
          <Link key={showingID} to={base + showingID}>
            {showTime}{" "}
          </Link>
        ))}
      </div>
    </>
  );
}
ShowTimes.propTypes = {
  showings: PropTypes.arrayOf(
    PropTypes.shape({
      showingID: PropTypes.number.isRequired,
      showTime: PropTypes.string.isRequired,
    })
  ),
};
