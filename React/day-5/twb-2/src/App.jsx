import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  let handleFormSubmit = (e) => {
    e.preventDefault();
    let arr = [...users, formData];
    setUsers(arr);
    localStorage.setItem("users", JSON.stringify(arr));
    e.target.reset();
  };

  return (
    <div>
      <h1>TWB</h1>

      <form action="" onSubmit={handleFormSubmit}>
        <input
          name="name"
          onChange={handleChange}
          type="text"
          placeholder="Name"
        />
        <input
          name="email"
          onChange={handleChange}
          type="text"
          placeholder="Email"
        />
        <input
          name="password"
          onChange={handleChange}
          type="text"
          placeholder="Password"
        />
        <button>Submit</button>
      </form>

      <div>
        {users.map((elem, index) => (
          <h1 key={index}>{elem.name}</h1>
        ))}
      </div>
    </div>
  );
};

export default App;
