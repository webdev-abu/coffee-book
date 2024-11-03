import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";

function Card({ coffee,handleRemove }) {
  const { pathname } = useLocation();
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
      {pathname === `/dashboard` && (
        <div onClick={()=>handleRemove(id)} className="absolute -top-5 -right-5 bg-warning p-3 rounded-full">
          <FaRegTrashAlt className="text-white text-2xl" />
        </div>
      )}
    </div>
  );
}
Card.propTypes = {
  coffee: PropTypes.object.isRequired,
};

export default Card;
