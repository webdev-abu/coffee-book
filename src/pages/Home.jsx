import React from "react";
import Banner from "../components/Banner";
import Heading from "../components/Heading";

function Home() {
  return (
    <div>
      {/* Banner */}
      <Banner></Banner>
      {/* Heading */}
      <Heading
        title={"Browse Coffees by Category"}
        subtitle={
          "Choose your desired coffee category to browse through specific coffees that fit in your taste."
        }
      ></Heading>
      {/* Category Tab Section Header */}
      {/* Dynamic Nested Component */}
    </div>
  );
}

export default Home;
