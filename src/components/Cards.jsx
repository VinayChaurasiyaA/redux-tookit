import React, { useState } from "react";

import "../styles/Home.scss";
import { useDispatch } from "react-redux";
const Cards = ({ id, name, price, quantity, handler, img }) => {
  const dispatch = useDispatch();
  const [isAdd, setIsAdd] = useState(false);
  const adding = ({ name, price, quantity }) => {
    handler({ name, price, quantity, isAdd, img, id });
    if (isAdd) {
      dispatch({ type: "deleteFromCart", payload: id });
    }
    setIsAdd(!isAdd);
  };

  return (
    <div className="card">
      <img src={img} alt={name} />
      <p>{name}</p>
      <h4>{price}</h4>
      <button onClick={() => adding({ name, price, quantity, img })}>
        {isAdd === false ? "Add to cart" : "Remove from cart"}
      </button>
    </div>
  );
};

export default Cards;
