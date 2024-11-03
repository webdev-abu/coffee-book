import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import nutritionImg from "../assets/nutrition.png";
import { addFavorite, getAllFavorite } from "../utils";

function CoffeeDetails() {
  const { id } = useParams();
  const allCoffeesData = useLoaderData();
  const [coffee, setCoffee] = useState({});
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    const singleCoffee = allCoffeesData.find(
      (coffee) => coffee.id === parseInt(id)
    );
    setCoffee(singleCoffee);
    const isLocalFavorite = getAllFavorite();
    const isExitsFavorite = isLocalFavorite.find(
      (item) => item.id == singleCoffee.id
    );
    if (isExitsFavorite) {
      setIsFavorite(true);
    }
  }, [allCoffeesData, id]);
  const {
    name,
    image,
    ingredients,
    nutrition_info,
    description,
    making_process,
    rating,
    popularity,
  } = coffee || {};
  //   console.log(Object.keys(nutrition_info,ingredients));
  // Handle favorite btn click
  const handleFavorite = (coffee) => {
    addFavorite(coffee);
    setIsFavorite(true);
  };
  return (
    <div className="my-12">
      <h1 className="text-2xl md:text-4xl font-thin mb-6">{description}</h1>
      <div className="w-full h-full md:h-[500px] object-cover overflow-hidden rounded-xl shadow-xl">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="flex justify-between items-center my-6">
        <h1 className="text-2xl md:text-3xl font-thin">{name}</h1>
        <p className="text-base">Popularity : {popularity}</p>
        <p className="text-base">Rating : {rating}</p>
        <div>
          <button
            disabled={isFavorite}
            onClick={() => handleFavorite(coffee)}
            className="btn btn-warning "
          >
            {" "}
            Add Favorite
          </button>
        </div>
      </div>
      <div className="my-6">
        <h2 className="text-2xl md:text-3xl font-thin">Making Process :</h2>
        <p className="text-base">{making_process}</p>
      </div>
      <div className="my-6 flex justify-between items-center">
        <div className="flex-1">
          <div className="flex flex-col justify-center gap-6">
            <h2 className="text-2xl md:text-3xl font-thin">Ingredients:</h2>
            <ul className="text-xl ml-12">
              {ingredients &&
                ingredients.map((ingredient, i) => (
                  <li className="list-disc" key={i}>
                    {ingredient}
                  </li>
                ))}
            </ul>
            <h1 className="text-2xl font-thin">Nutrition:</h1>
            <ul className="text-xl ml-12">
              {nutrition_info &&
                Object.keys(nutrition_info).map((n) => {
                  <li className="list-disc" key={n}>
                    {n} : {nutrition_info[n]}
                  </li>;
                })}
            </ul>
          </div>
        </div>
        <div className="flex-1">
          <img src={nutritionImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CoffeeDetails;
