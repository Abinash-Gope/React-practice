import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Usercard from "./components/Usercard";
import Form from "./components/Form";

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });

  const handleDelete = (id) => {
    let filterUser = users.filter((val, index) => {
      return index !== id;
    });
    console.log(filterUser)
    setUsers(filterUser);
    localStorage.setItem("users", JSON.stringify());
  };
  
  const [editingUser, setEditingUser] = useState(null);

  return (
    <div className="p-3 h-screen flex flex-col gap-4">
      <Navbar setToggle={setToggle} />
      {toggle ? (
        <div className="flex gap-4 flex-wrap">
          {users.map((elem) => {
            return (
              <Usercard 
                key={elem.id} 
                users={elem} 
                setToggle={setToggle} 
                handleDelete={handleDelete}
                setEditingUser={setEditingUser} 
                setUsers={setUsers}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex justify-center h-[70%] items-center">
          {/* 3. Pass both state and setter to Form */}
          <Form 
            setUsers={setUsers} 
            setToggle={setToggle}
            users={users}
            editingUser={editingUser}
            setEditingUser={setEditingUser}
          />
        </div>
      )}
    </div>
  );
};

export default App;
