import React, { lazy, Suspense } from "react";
import TodayDes from "./TodayDes";
import HeroSection from "./HeroSection";
const CategoriesSection = lazy(() => import("./CategoriesSection"));


const Home = () => {
  return (
    <div className="container px-default md:px-primary mx-auto min-h-screen">
      <HeroSection />
      <TodayDes />
      <Suspense fallback={<div>Loading...</div>}>
        <CategoriesSection />
      </Suspense>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-primary p-4 rounded-lg">1</div>
        <div className="bg-primary p-4 rounded-lg">2</div>
        <div className="bg-primary p-4 rounded-lg">3</div>
      </div>
    </div>
  );
};

export default Home;
