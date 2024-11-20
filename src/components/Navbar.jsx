import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

const navitems = [
  <li key="home">
    <a href="/">Home</a>
  </li>,
  <li key="courses">
    <a href="/Courses">Courses</a>
  </li>,
  <li key="contact">
    <a href="/Contact">Contact</a>
  </li>,
  <li key="about">
    <a href="/About">About</a>
  </li>,
];

function Navbar() {
  const [sticky, setSticky] = useState(false);

  // Initial theme state setup, checking localStorage for theme
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });

  // Update theme in localStorage and apply dark mode class when theme changes
  useEffect(() => {
    const element = document.documentElement;

    if (theme === "dark") {
      element.classList.add("dark");
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");

      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]); // Run this effect only when the theme changes

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`max-w-screen-2xl container mx-auto md:px-20 px-4 z-50 dark:bg-slate-900 dark:text-white ${
        sticky
          ? "sticky top-0 bg-base-200 shadow-md transition-all dark:bg-slate-800 dark:text-white"
          : ""
      }`}
    >
      <div className="navbar p-2 flex justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              aria-label="Toggle navigation menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navitems}
            </ul>
          </div>
          <a className="text-3xl font-bold cursor-pointer">WisdomStore</a>
        </div>

        {/* Center Section */}
        <div className="hidden lg:flex justify-center">
          <ul className="menu menu-horizontal space-x-4 px-1">{navitems}</ul>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>

          {/* Theme Toggle */}
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              className="theme-controller"
              checked={theme === "dark"} // Checkbox is checked if theme is dark
              onChange={() => setTheme(theme === "dark" ? "light" : "dark")} // Toggle theme
            />

            {/* Sun Icon */}
            <svg
              className="swap-off h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* Moon Icon */}
            <svg
              className="swap-on h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Z" />
            </svg>
          </label>

          <a
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className="btn"
          >
            Login
          </a>
          <Login></Login>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
