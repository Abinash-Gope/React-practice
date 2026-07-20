import React from "react";

const Usercard = () => {
  return (
    <div className="p-4 border bg-black rounded flex flex-col gap-2">
      <div className="h-40 w-40">
        <img className="object-fit h-full w-full rounded-xl"
          src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-1 text-white">
        <p>Name</p>
        <p className="text-sm">Email</p>
        <p className="text-sm">Contact</p>
      </div>
      <div className="flex w-full justify-between gap-4">
        <button className="bg-yellow-700 text-white py-2 px-3">Update</button>
        <button className="bg-red-700 text-white py-2 px-3">Delete</button>
      </div>
    </div>
  );
};

export default Usercard;
