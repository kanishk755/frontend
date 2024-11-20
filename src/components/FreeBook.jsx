import list from "../../public/list.json";
import React from "react";
import Slider from "react-slick"; // Ensure you have installed react-slick and slick-carousel
import "slick-carousel/slick/slick.css"; // Import slick-carousel styles
import "slick-carousel/slick/slick-theme.css";
import Cards from "./Cards";

function FreeBook() {
  // Filter books with "Free" category
  const filterData = list.filter((data) => data.category === "Free");

  // Slider settings
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0, // Adjusted for better default behavior
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <h1 className="text-3xl font-bold mb-8">Free Offered Books</h1>
      <Slider {...settings}>
        {filterData.map((book) => (
          <Cards book={book} key={book.id}></Cards>
        ))}
      </Slider>
    </div>
  );
}

export default FreeBook;
