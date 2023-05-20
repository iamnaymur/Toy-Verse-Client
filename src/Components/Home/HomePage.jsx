import React from "react";
import ToyCategory from "./ToyCategory/ToyCategory";
import Banner from "./Banner/Banner";
import HowToBuy from "./HowToBuy/HowToBuy";
import TopCustomer from "./TopCustomer/TopCustomer";
import Subscription from "./Subscription/Subscription";
import GallerySection from "./GallerySection/GallerySection";
import DynamicPageTitle from "../DynamicPageTitle/DynamicPageTitle";

const HomePage = () => {
  return (
    <div>
      <DynamicPageTitle title="Home" />
      <Banner></Banner>
      <GallerySection></GallerySection>
      <ToyCategory></ToyCategory>
      <HowToBuy></HowToBuy>

      <TopCustomer></TopCustomer>
      <Subscription></Subscription>
    </div>
  );
};

export default HomePage;
