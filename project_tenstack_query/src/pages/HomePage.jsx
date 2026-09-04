import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../app/store";
import {
  decrement,
  increment,
  incrementByValue,
} from "../features/counterSlice";

const HomePage = () => {
  const [inpValue, setInpValue] = useState(0);
  let dispatch = useDispatch();
  let { count } = useSelector((store) => store.counter);

  const handleClear = () => {
    setInpValue("");
  };
  return (
    <div>
      <div className="bg-red-400 rounded m-2 p-3">
        <h1 className="text-4xl font-mono">Count is {count}</h1>
        <button
          className=" bg-red-300 m-2 p-2 border-2 rounded-2xl"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className=" bg-red-300 m-2 p-2 border-2 rounded-2xl"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <br />
        <br />
        <input
          className=" bg-red-200 rounded-xl border-2"
          type="number"
          placeholder="Enter count"
          value={inpValue}
          onChange={(e) => setInpValue(e.target.value)}
        />
        <button
          className=" bg-red-300 m-2 p-2 border-2 rounded-2xl"
          onClick={() => {
            dispatch(incrementByValue(inpValue || 0));
            handleClear();
          }}
        >
          Add to count
        </button>
      </div>
    </div>
  );
};

export default HomePage;
