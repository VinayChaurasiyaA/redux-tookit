import React, { useEffect } from "react";
import Cards from "./Cards";
import toast, { Toaster } from "react-hot-toast";

import "../styles/Home.scss";
import { useDispatch } from "react-redux";
const Home = () => {
  // useEffect(() => {
  //   toast.success("Added to cart");
  // });

  const data = [
    {
      id: 1,
      name: "Mac book",
      price: 1200,
      quantity: 1,
      img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-silver-select-202206?wid=640&hei=595&fmt=jpeg&qlt=95&.v=1664497095569",
    },
    {
      id: 2,
      name: "Mac book pro max",
      price: 4555,
      quantity: 1,
      img: "https://images.hindustantimes.com/tech/img/2022/07/29/960x540/IMG_4284_1657976137822_1659067579143_1659067579143.jpg",
    },
  ];
  const dispatch = useDispatch();
  const addCardHandler = (options) => {
    if (options.isAdd === false) {
      toast.success("Added to cart");
      dispatch({ type: "addToCart", payload: options });
      dispatch({ type: "calculatePirce" });

      console.log(options);
    } else {
      dispatch({ type: "removeFromCart", payload: options });
      dispatch({ type: "calculatePirce" });

      toast.error("Removed from the cart");
    }
  };
  return (
    <>
      <h2 className="header">Home</h2>
      <div className="home">
        {data.map((val, index) => (
          <Cards
            key={index}
            id={val.id}
            name={val.name}
            price={val.price}
            quantity={val.quantity}
            handler={addCardHandler}
            img={val.img}
          />
        ))}
        <Toaster />
      </div>
    </>
  );
};

export default Home;
