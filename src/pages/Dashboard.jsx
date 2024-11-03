import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import { getAllFavorite, removeFavorite } from "../utils";
import Card from "../components/Card";
import { useLocation } from "react-router-dom";

function Dashboard() {
  const { pathname } = useLocation();
  console.log(pathname);
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    const favorites = getAllFavorite();
    setCoffees(favorites);
  }, []);
  const handleRemove = (id) => {
    removeFavorite(id);
    const favorites = getAllFavorite();
    setCoffees(favorites);
  };
  return (
    <>
      <Heading
        title="Welcome to Dashboard"
        subtitle="Manage coffee that you have previously added as favorite."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6 gap-8">
        {coffees.map((coffee) => (
          <Card
            handleRemove={handleRemove}
            key={coffee.id}
            coffee={coffee}
          ></Card>
        ))}
      </div>
    </>
  );
}

export default Dashboard;
