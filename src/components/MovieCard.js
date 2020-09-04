import React from "react";
import PropTypes from "prop-types";
export default function MovieCard({
  title,
  tagline,
  runtime,
  cert,
  posterURL,
  children,
}) {
  return (
    <>
      <div>
        <img alt={`movie poster for ${title}`} src={posterURL} />
      </div>
      <div>{title}</div>
      <div>{tagline}</div>
      <div>{runtime}</div>
      <div>{cert}</div>
      <div>{children}</div>
    </>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  runtime: PropTypes.string.isRequired,
  cert: PropTypes.string.isRequired,
  children: PropTypes.node,
};
