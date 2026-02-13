import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Register = ({ setToggle }) => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [registerUsers, setRegisterUsers] = useState([]);



  const handleFormSubmit = (data) => {
    let arr = [...registerUsers, data];
    setRegisterUsers(arr);
    localStorage.setItem("reg users", JSON.stringify(arr));
    alert("user registered successfully");
  };

  return (
    <div className="p-6 rounded-md bg-white flex flex-col items-center">
      <h1 className="mb-6 text-2xl">Register</h1>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex flex-col mb-4 gap-4"
        action=""
      >
        {/* name-- */}
        <div className="flex flex-col gap-3">
          <label className="text-xl" htmlFor="">
            Name
          </label>

          <input
            {...register("name", { required: "Name is required" })}
            className="py-2 rounded w-70 px-2 border border-gray-400"
            type="text"
            placeholder="Name"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        {/* email-- */}
        <div className="flex flex-col gap-3">
          <label className="text-xl" htmlFor="">
            Email
          </label>

          <input
            {...register("email", { required: "Email is required" })}
            className="py-2 rounded w-70 px-2 border border-gray-400"
            type="email"
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* mobile-- */}
        <div className="flex flex-col gap-3">
          <label className="text-xl" htmlFor="">
            Mobile
          </label>
          <input
            {...register("mobile", {
              required: "Mobile is required",
              minLength: {
                value: 10,
                message: "10 digits are required",
              },
              maxLength: {
                value: 10,
                message: "only 10 digits are required",
              },
            })}
            className="py-2 rounded w-70 px-2 border border-gray-400"
            type="number"
            placeholder="Mobile"
          />
          {errors.mobile && (
            <p className="text-red-500">{errors.mobile.message}</p>
          )}
        </div>

        {/* password-- */}
        <div className="flex flex-col gap-3">
          <label className="text-xl" htmlFor="">
            Password
          </label>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "At least 6 characters is required",
              },
            })}
            className="py-2 rounded w-70 px-2 border border-gray-400"
            type="password"
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>

        <button className="py-3 px-10 bg-blue-600 text-white cursor-pointer rounded">
          Register
        </button>
      </form>
      <div>
        <p>
          Already have an account?{" "}
          <span
            onClick={() => setToggle((prev) => !prev)}
            className="text-blue-600 cursor-pointer"
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;

// make login and register form
// get values from form via react hook form-
// save that user into localstorage
// now login the user which is saved in your register array in local storage
// if user found, display their name in App.jsx
// if not, shows an alert("user not found! please register first")
// and if their password is incorrect shows the error via alert
