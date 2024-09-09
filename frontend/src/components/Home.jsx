import React from "react";
import TodayDes from "./TodayDes";
import CategoriesSection from "./CategoriesSection";
import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <div className="container px-4 md:px-8 mx-auto min-h-screen">
      <HeroSection />
      <TodayDes />
      <CategoriesSection />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-primary p-4 rounded-lg">1</div>
        <div className="bg-primary p-4 rounded-lg">2</div>
        <div className="bg-primary p-4 rounded-lg">3</div>
      </div>
    </div>
  );
};

export default Home;
