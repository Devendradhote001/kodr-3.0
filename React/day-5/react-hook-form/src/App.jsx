import React, { useRef } from "react";
import { useForm } from "react-hook-form";

const App = () => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let data = useForm();
  console.log(data);
  console.log("errors->", errors);

  console.log("rendering...");

  return (
    <div>
      <h1>Hello</h1>

      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          reset();
        })}
        action=""
      >
        <br />
        <input
          {...register("name", { required: true })}
          type="text"
          placeholder="Name"
        />{" "}
        <br />
        {errors.name && <p>Name is required</p>}
        <input
          {...register("email", { required: true })}
          type="text"
          placeholder="Email"
        />{" "}
        <br />
        {errors.email && <p>Email is required</p>}
        <input
          {...register("password", { required: true, minLength: 6 })}
          type="text"
          placeholder="password"
        />
        {errors.password && errors.password.type === "required" && (
          <p>Password is required</p>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <p>at least 6 characters are required</p>
        )}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
