import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Card({ coffee }) {
  const { name, image, category, origin, type, id, rating, popularity } =
    coffee || {};
  return (
    <div className="flex relative">
      <Link
        to={`/coffee/${id}`}
        className="transition hover:scale-105 shadow-xl rounded-xl overflow-hidden"
      >
        <figure className="w-full h-48 overflow-hidden">
          <img src={image} alt={name} />
        </figure>
        <div className="p-4">
          <h2 className="text-xl ">Name : {name}</h2>
          <p className="text-md ">Category : {category}</p>
          <p className="text-md ">Type : {type}</p>
          <p className="text-md ">Origin : {origin}</p>
          <p className="text-md ">Rating : {rating}</p>
          <p className="text-md ">Popularity : {popularity}</p>
        </div>
      </Link>
    </div>
  );
}
Card.propTypes = {
  coffee: PropTypes.object.isRequired,
};

export default Card;
