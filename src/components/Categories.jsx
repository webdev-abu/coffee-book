import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function Categories({ categories }) {
  return (
    <div role="tablist" className="tabs tabs-lifted">
      {categories.map((category) => (
        <NavLink
          key={category.category}
          to={`/category/${category.category}`}
          role="tab"
          className={({ isActive }) =>
            `tab font-bold text-[18px] text-primary ${
              isActive ? "tab-active text-secondary" : "hover:text-secondary"
            }`
          } //isActive ? "tab-active" : ""
        >
          {" "}
          {category.category}
        </NavLink>
      ))}
    </div>
  );
}
Categories.PropTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Categories;
