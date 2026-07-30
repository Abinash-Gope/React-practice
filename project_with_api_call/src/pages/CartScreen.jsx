import React from "react";
import CartCard from "../components/CartCard";

const CartScreen = ({ cartItems }) => {
  return (
    <div className="h-screen text-6xl">
      {cartItems.map((elem) => {
        return <CartCard key={elem.id} item={elem}/>;
      })}
    </div>
  );
};

export default CartScreen;
