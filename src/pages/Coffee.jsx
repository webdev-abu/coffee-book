import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import sortBy from "sort-by";

function Coffee() {
  const coffeesData = useLoaderData();
  const [coffees, setCoffees] = useState(coffeesData);
  const handleBySort = (sortBy) => {
    if (sortBy === "popularity") {
      const sorted = [...coffeesData].sort(
        (a, b) => b.popularity - a.popularity
      );
      setCoffees(sorted);
    } else if (sortBy === "rating") {
      const sorted = [...coffeesData].sort((a, b) => b.rating - a.rating);
      setCoffees(sorted);
    }
  };
  return (
    <>
      <div className="flex justify-between items-center ">
        <div>
          <h1 className="text-3xl font-thin">
            Sort Coffee&apos;s by Popularity and Rating -&gt;
          </h1>
        </div>
        <div className="space-x-4">
          <button
            onClick={() => handleBySort("popularity")}
            className="btn btn-warning"
          >
            Sort By Popularity
          </button>
          <button
            onClick={() => handleBySort("rating")}
            className="btn btn-warning"
          >
            Sort By Rating
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6 gap-6">
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee}></Card>
        ))}
      </div>
    </>
  );
}

export default Coffee;
