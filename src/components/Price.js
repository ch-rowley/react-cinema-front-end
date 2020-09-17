import React from "react";
import PropTypes from "prop-types";
export default function Price({ children = 0 }) {
  return <span>£{children.toFixed(2)}</span>;
}

Price.propTypes = {
  children: PropTypes.number,
};
