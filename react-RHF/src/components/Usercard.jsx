import React from "react";

// 1. Destructure setEditingUser and setUsers from props
const Usercard = ({ users, setToggle, setUsers, handleDelete, ind, setUpdatedData}) => {
  

  return (
    <div className="p-4 border bg-black rounded flex flex-col gap-2">
      <div className="h-40 w-40">
        <img 
          className="object-cover h-full w-full rounded-xl"
          src={users.image}
          alt={users.name}
        />
      </div>
      <div className="flex flex-col gap-1 text-white">
        <p>{users.name}</p>
        <p className="text-sm">{users.email}</p>
        {/* Fixed: Changed users.contact to users.mobile to match your form state */}
        <p className="text-sm">{users.mobile}</p> 
      </div>
      <div className="flex w-full justify-between gap-4">
        {/* 4. Attached the handleUpdate function */}
        <button 
          onClick={() => {
            setUpdatedData(user)
            setToggle((prev) => !prev);
          }} 
          className="bg-yellow-700 text-white py-2 px-3 cursor-pointer rounded hover:bg-yellow-600 transition"
        >
          Update
        </button>
        {/* 5. Attached the handleDelete function */}
        <button 
          onClick={() => handleDelete(ind)}
          className="bg-red-700 text-white py-2 px-3 cursor-pointer rounded hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Usercard;

