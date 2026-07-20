import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Usercard from "./components/Usercard";
import Form from "./components/Form";

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [users, setUsers] = useState([]);
  
  // 1. Add the state to track which user is being updated
  const [editingUser, setEditingUser] = useState(null);

  return (
    <div className="p-3 h-screen flex flex-col gap-4">
      <Navbar setToggle={setToggle} />
      {toggle ? (
        <div className="flex gap-4 flex-wrap">
          {users.map((elem, index) => {
            return (
              <Usercard 
                key={index} 
                users={elem} 
                setToggle={setToggle} 
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
            editingUser={editingUser}
            setEditingUser={setEditingUser}
          />
        </div>
      )}
    </div>
  );
};

export default App;
