import React from "react";
import TodayDes from "../components/TodayDes";
import HeroSection from "../components/HeroSection";
import JBLSection from "../components/JBLSection";
import CategoriesSection from "../components/CategoriesSection";
import NewArrivalSection from "../components/NewArrivalSection";
import ServicesSection from "../components/ServicesSection";

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
