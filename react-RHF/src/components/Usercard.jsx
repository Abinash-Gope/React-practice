import React from "react";

const Usercard = ({users, setToggle}) => {
  return (
    <div className="p-4 border bg-black rounded flex flex-col gap-2">
      <div className="h-40 w-40">
        <img className="object-cover h-full w-full rounded-xl"
          src={users.image}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-1 text-white">
        <p>{users.name}</p>
        <p className="text-sm">{users.email}</p>
        <p className="text-sm">{users.contact}</p>
      </div>
      <div className="flex w-full justify-between gap-4">
        <button onClick={() => setToggle(prev => !prev)} className="bg-yellow-700 text-white py-2 px-3">Update</button>
        <button className="bg-red-700 text-white py-2 px-3">Delete</button>
      </div>
    </div>
  );
};

export default Usercard;
