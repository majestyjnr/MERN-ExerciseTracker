import React, { useState } from "react";
import axios from "axios";

const CreateUsers = () => {
  const [username, setUsername] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      username: username,
    };
    console.table(newUser);

    axios
      .post("http://localhost:4000/add-user", newUser)
      .then((res) => console.log(res.data));

    setUsername("");
  };

  return (
    <div className="container card p-5">
      <h1>Create User</h1>

      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="">Username:</label>
          <input
            type="text"
            placeholder="Username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <input type="submit" value="Add User" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default CreateUsers;
