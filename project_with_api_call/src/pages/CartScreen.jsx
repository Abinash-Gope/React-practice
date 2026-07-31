import React from "react";
import CartCard from "../components/CartCard";

const CartScreen = ({ cartItems }) => {
  return (
    <div className="h-[95%] text-6xl gap-4 grid grid-cols-3">
      {cartItems.map((elem) => {
        return <CartCard key={elem.id} item={elem}/>;
      })}
    </div>
  );
};

export default CartScreen;
