import React from "react";
import { AiFillDelete } from "react-icons/ai";

import "../styles/cartItem.scss";
import "../styles/media.scss";
const CartItem = ({
  img,
  price,
  qnt,
  id,
  name,
  increment,
  decrement,
  deletehandler,
}) => {
  return (
    <div className="cartitem">
      <img src={img} alt={name} />
      <article>
        <h2>{name}</h2>
        <p>{price}</p>
      </article>
      <div>
        <button onClick={() => increment(id)}>+</button>
        <p>{qnt}</p>
        <button onClick={() => decrement(id)}>-</button>
      </div>
      <AiFillDelete onClick={() => deletehandler(id)} />
    </div>
  );
};

export default CartItem;
