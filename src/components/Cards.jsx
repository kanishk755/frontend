import React from "react";

function Cards({ book }) {
  return (
    <div className="mb-5 mt-20">
      <div className="card bg-base-100 w-72 h-96 shadow-md hover:scale-110 duration-200 dark:bg-slate-500 dark:text-white">
        <figure>
          <img
            className="h-60 object-cover"
            src={`${book.image}`}
            alt="Shoes"
          />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-lg">
            {book.name}
            <div className="badge badge-secondary text-sm">NEW</div>
          </h2>
          <p className="text-sm">{book.title}</p>
          <div className="card-actions flex justify-between px-2 py-3">
            <div className="badge badge-outline text-xs">{book.price}$</div>
            <div className="badge badge-outline text-xs hover:bg-pink-400 cursor-pointer">
              Buy now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
