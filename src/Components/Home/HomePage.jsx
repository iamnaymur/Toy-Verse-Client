import React from "react";
import ToyCategory from "./ToyCategory/ToyCategory";
import Banner from "./Banner/Banner";
import HowToBuy from "./HowToBuy/HowToBuy";
import TopCustomer from "./TopCustomer/TopCustomer";
import Subscription from "./Subscription/Subscription";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <ToyCategory></ToyCategory>
      <HowToBuy></HowToBuy>
      <TopCustomer></TopCustomer>
      <Subscription></Subscription>
    </div>
  );
};

export default HomePage;
