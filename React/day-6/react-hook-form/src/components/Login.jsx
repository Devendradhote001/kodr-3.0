import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Login = ({ setToggle }) => {
  let { register, handleSubmit, reset } = useForm();
  const [u, setU] = useState(null);

  let registerUsers = JSON.parse(localStorage.getItem("reg users"));

  let handleFormSubmit = (data) => {
    let user = registerUsers.find((elem) => elem.email === data.email);
    console.log(user);

    if (!user) {
      alert("user not found");
      return;
    }

    if (user.password !== data.password) {
      alert("incorrect password");
      return;
    }

    setU(user);
    alert("user logged in");
  };

  return (
    <div className="p-6 rounded-md bg-white flex flex-col items-center">
      <h1 className="mb-6 text-2xl">Login</h1>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex flex-col mb-4 gap-4"
        action=""
      >
        <div className="flex flex-col gap-3">
          <label className="text-xl" htmlFor="">
            Email
          </label>

          <input
            {...register("email")}
            className="py-2 rounded w-70 px-2 border border-gray-400"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-xl" htmlFor="">
            Password
          </label>
          <input
            {...register("password")}
            className="py-2 rounded w-70 px-2 border border-gray-400"
            type="password"
            placeholder="Password"
          />
        </div>
        <button className="py-3 px-10 bg-blue-600 text-white cursor-pointer rounded">
          Submit
        </button>
      </form>
      <div>
        <p>
          Don't have an account?{" "}
          <span
            onClick={() => setToggle((prev) => !prev)}
            className="text-blue-600 cursor-pointer"
          >
            Register here
          </span>
        </p>
      </div>

      {u ? <p className="text-4xl">{u.name}</p> : null}
    </div>
  );
};

export default Login;
