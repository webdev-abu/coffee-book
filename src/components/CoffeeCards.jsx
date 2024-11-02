import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";

function CoffeeCards() {
  const navigate = useNavigate();
  const coffeeData = useLoaderData();
  //   console.log(coffeeData);
  const { category } = useParams();
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    if (category) {
      const filteredCoffee = [...coffeeData].filter(
        (coffee) => coffee.category === category
      );
      setCoffees(filteredCoffee);
    } else {
      setCoffees(coffeeData.slice(0, 6));
    }
  }, [coffeeData, category]);
  //   console.log(category);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6 gap-6">
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee}></Card>
        ))}
      </div>
      <button
        onClick={() => navigate("/coffees")}
        className="btn bg-[#ff41c7] text-white my-6"
      >
        View All
      </button>
    </>
  );
}

export default CoffeeCards;
