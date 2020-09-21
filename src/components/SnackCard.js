import React from "react";
import PropTypes from "prop-types";
export default function SnackCard({
  name,
  quantity,
  price,
  image,
  callBack = (f) => f,
}) {
  return (
    <>
      <div>
        {name} £{price}
      </div>
      <div>
        <img alt={`${name}`} src={image} />
      </div>
      <div>
        <button onClick={() => callBack(1)}>+1</button>
        <span className="quantity">{quantity}</span>
        <button onClick={() => callBack(-1)}>-1</button>
      </div>
    </>
  );
}

SnackCard.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  callBack: PropTypes.func.isRequired,
};
