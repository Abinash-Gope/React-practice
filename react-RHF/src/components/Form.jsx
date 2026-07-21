import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Form = ({ setUsers, setToggle, users, editingUser, setEditingUser }) => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    values: editingUser || { name: "", email: "", mobile: "", image: "" },
  });

  let formSubmit = (data) => {
    if (editingUser) {
      // 3. UPDATE MODE: Replace the old user data using a unique identifier (like id or email)
      setUsers((prev) =>
        prev.map((user) => (user.email === editingUser.email ? data : user))
      );
      setEditingUser(null); // Clear editing state after update
    } else {
      // 4. CREATE MODE: Append new user
      setUsers((prev) => [...prev, data]);
      localStorage.setItem("users", JSON.stringify(users));
    }
    reset();
    setToggle((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-3 items-center">
      <h1 className="text-xl font-semibold">
        {editingUser ? "Update User" : "Create User"}
      </h1>
      <form
        onSubmit={handleSubmit(formSubmit)}
        action=""
        className="w-90 flex flex-col gap-3 p-4 rounded border-2  border-black"
      >
        <input
          {...register("name", {
            required: "Name is required",
          })}
          className="p-2 rounded outline-0 border border-black"
          type="text"
          placeholder="Name"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Please enter valid email",
            },
          })}
          className="p-2 rounded outline-0 border border-black"
          type="email"
          placeholder="Email"
          // Disable email field during updates if it serves as your primary key
          disabled={!!editingUser} 
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <input
          {...register("mobile", {
            required: "Number is required",
            minLength: {
              value: 10,
              message: "Minimum 10 digits are required",
            },
            maxLength: {
              value: 10,
              message: "Maximum 10 digits are required",
            },
          })}
          className="p-2 rounded outline-0 border border-black"
          type="number"
          placeholder="Mobile"
        />
        {errors.mobile && (
          <p className="text-red-500">{errors.mobile.message}</p>
        )}
        <input
          {...register("image", {
            required: "Image is required",
          })}
          className="p-2 rounded outline-0 border border-black"
          type="url"
          placeholder="Image"
        />
        {errors.image && <p className="text-red-500">{errors.image.message}</p>}
        <button className="text-black bg-blue-700 p-2 rounded-xl cursor-pointer">
          {editingUser ? "Update User" : "Add User"}
        </button>

        {editingUser && (
          <button
            type="button"
            onClick={() => {
              setEditingUser(null);
              reset();
            }}
            className="text-black bg-gray-300 p-2 rounded-xl cursor-pointer"
          >
            Cancel
          </button>
        )}
      </form>
    </div>
  );
};

export default Form;
