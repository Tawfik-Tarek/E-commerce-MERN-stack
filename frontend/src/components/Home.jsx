import React, { lazy, Suspense } from "react";
import TodayDes from "./TodayDes";
import HeroSection from "./HeroSection";
import JBLSection from "./JBLSection";
const CategoriesSection = lazy(() => import("./CategoriesSection"));

const Home = () => {
  return (
    <div className="container px-default md:px-primary mx-auto min-h-screen">
      <HeroSection />
      <TodayDes />
      <Suspense fallback={<div>Loading...</div>}>
        <CategoriesSection />
      </Suspense>

      <JBLSection />
    </div>
  );
};

export default Home;
