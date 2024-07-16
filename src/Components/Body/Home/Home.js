import React from "react";
import Banner from "./Banner/Banner";
import Cards from "./Cards/Cards";
import Introduction from "./Intorduction/Introduction";
import Offer from "./Offer/Offer";


const Home = () => {
  return (
    <div>
      <Banner />
      <Introduction />
      <Cards />
      <Offer />
      {/* <Youtube />
        <Video />
        <Blog /> */}
    </div>
  );
};

export default Home;
