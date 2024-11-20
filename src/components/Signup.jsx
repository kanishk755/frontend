import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"; // Import useForm hook

function Signup() {
  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle form submission
  const onSubmit = (data) => {
    console.log(data); // Handle the form data
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-800">
      <div className="modal-box max-w-sm p-6 dark:bg-slate-900 dark:text-white">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Close button can be used if needed for modal */}
          <Link
            to="/"
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById("my_modal_3").close()}
          >
            ✕
          </Link>

          <h3 className="font-bold text-lg text-center">Signup</h3>

          {/* Name Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-white">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full dark:bg-slate-800 dark:text-white"
              required
              {...register("name", { required: "Name is required" })} // Validation
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </div>

          {/* Email Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-white">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full dark:bg-slate-800 dark:text-white"
              required
              {...register("email", { required: "Email is required" })} // Validation
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>

          {/* Password Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-white">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full dark:bg-slate-800 dark:text-white"
              required
              {...register("password", { required: "Password is required" })} // Validation
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </div>

          {/* Submit Button */}
          <div className="form-control mt-4">
            <button type="submit" className="btn bg-pink-500 w-full">
              Signup
            </button>
          </div>

          {/* Login Link */}
          <div className="text-center mt-2">
            <p className="text-sm">
              Already registered?{" "}
              <button
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
                className="text-blue-500 underline hover:text-blue-700"
              >
                Login
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
