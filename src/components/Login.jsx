import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"; // Import only useForm

function Login() {
  // Use the useForm hook to initialize form handling
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Function to handle form submission
  const onSubmit = (data) => {
    console.log(data); // Log the form data when submitted
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box max-w-sm dark:bg-slate-900 dark:text-white">
          <form
            onSubmit={handleSubmit(onSubmit)} // Correct usage of handleSubmit
            method="dialog"
            className="space-y-4"
          >
            {/* Close button */}
            <Link
              to="/"
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg text-center">Login</h3>

            {/* Email Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text  dark:text-white">Email</span>
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
                <span className="label-text  dark:text-white">Password</span>
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
                Login
              </button>
            </div>

            {/* Signup Link */}
            <div className="text-center mt-2">
              <p className="text-sm">
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
