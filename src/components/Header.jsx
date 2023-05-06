import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

import "../styles/header.scss";
import { useSelector } from "react-redux";
const Header = () => {
  const { cartItem } = useSelector((state) => state.cart);
  return (
    <nav>
      <h1>Logo here.</h1>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/cart"}>
          <FiShoppingCart />
          <p>{cartItem.length}</p>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
