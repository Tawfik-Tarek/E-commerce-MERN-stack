import React from "react";
import TodayDes from "./TodayDes";
import HeroSection from "./HeroSection";
import JBLSection from "./JBLSection";
import CategoriesSection from "./CategoriesSection";
import NewArrivalSection from "./NewArrivalSection";
import ServicesSection from "./ServicesSection";

const Home = () => {
  return (
    <div className="container px-default md:px-primary mx-auto min-h-screen">
      <HeroSection />
      <TodayDes />
      <CategoriesSection />
      <JBLSection />
      <NewArrivalSection />
      <ServicesSection />
    </div>
  );
};

export default Home;
