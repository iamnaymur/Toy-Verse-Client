import React from "react";
import ToyCategory from "./ToyCategory/ToyCategory";
import Banner from "./Banner/Banner";
import MarvelSection from "./MarvelSection/MarvelSection";
import HowToBuy from "./HowToBuy/HowToBuy";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <MarvelSection></MarvelSection>
      <ToyCategory></ToyCategory>
      <HowToBuy></HowToBuy>
    </div>
  );
};

export default HomePage;
