import React from "react";
import banner from "../../public/banner.jpg"; // Ensure this is the correct path to your image

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-16 flex flex-col md:flex-row items-center dark:bg-slate-900 dark:text-white">
        {/* Left Section: Introductory Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 dark:bg-slate-900 dark:text-white">
            Welcome to WisdomStore!
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6 dark:bg-slate-900 dark:text-white">
            Discover a world of books that cater to all your reading needs. From
            the latest bestsellers to timeless classics, we have it all. Start
            your reading journey with us today!
          </p>

          {/* Email Input */}
          <label className="input input-bordered flex items-center gap-2 mb-4 w-80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow w-40" // Fixed width for the input
              placeholder="Email"
            />
          </label>

          {/* Explore Collection Button */}
          <a
            href="#books"
            className="inline-block py-2 px-6 text-white bg-blue-600 hover:bg-blue-700 rounded-full text-lg transition duration-300"
          >
            Explore Our Collection
          </a>
        </div>

        {/* Right Section: Image or Book Display */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src={banner} // Use the imported banner image directly
            alt="Bookshelf"
            className="rounded-lg shadow-lg max-w-full md:max-w-[80%] object-contain" // Make the image responsive and adjust size
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
