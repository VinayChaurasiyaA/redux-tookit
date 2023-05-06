import React from "react";
import CartItem from "./CartItem";

import "../styles/cart.scss";
import "../styles/media.scss";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItem } = useSelector((state) => state.cart);
  const { subTotal, shipping, Tax, Total } = useSelector((state) => state.cart);
  const increment = (id) => {
    dispatch({ type: "addToCart", payload: { id } });
    dispatch({ type: "calculatePirce" });
  };
  const decrement = (id) => {
    dispatch({ type: "removeFromCart", payload: { id } });
    dispatch({ type: "calculatePirce" });
  };
  const deletehandler = (id) => {
    dispatch({ type: "deleteFromCart", payload: id });
    dispatch({ type: "calculatePirce" });
  };
  return (
    <div className="cart">
      <main>
        {cartItem.length > 0
          ? cartItem.map((cart) => (
              <CartItem
                img={cart.img}
                name={cart.name}
                price={cart.price}
                qnt={cart.quantity}
                id={cart.id}
                increment={increment}
                decrement={decrement}
                deletehandler={deletehandler}
              />
            ))
          : "No elements found"}
      </main>
      <aside>
        <h4>SubTotal : ${subTotal}</h4>
        <h4>Shipping : ${shipping}</h4>
        <h4>Tax : ${Tax}</h4>
        <h4>Total : ${Total}</h4>
      </aside>
    </div>
  );
};

export default Cart;
