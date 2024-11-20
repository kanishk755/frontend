import React from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import list from "../../public/list.json";

const filterData = list.filter((data) => data.category === "Free");

function Course() {
  return (
    <div className="`max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white">
      <div className="justify center items-center text-center">
        <h1 className="text-center text-6xl font-bold mt-40">
          we are delighted to you here{" "}
          <span className="text-pink-400">welcome!</span>
        </h1>
        <p className="text-center text-xl mt-4 dark:bg-slate-900 dark:text-white">
          Explore our exciting range of courses to enhance your skills and
          knowledge. From beginner to advanced levels, we offer comprehensive
          content tailored to meet your learning goals. Dive into a world of
          possibilities, learn at your own pace, and unlock new opportunities
          with our expertly designed courses. Your journey to mastering new
          skills starts here!
        </p>
        <Link to="/">
          <button className=" mt-20 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            back
          </button>
        </Link>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-1 py-8 mb-5">
          {filterData.map((book) => (
            <Cards book={book} key={book.id}></Cards>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Course;
