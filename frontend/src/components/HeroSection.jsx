import React from "react";
import Slider from "./Slider";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center relative gap-5 w-full">
      <aside className="flex-none border-r md:border-black pr-4 md:pr-6 px-4  w-full md:w-1/4">
        <ul className="flex flex-col items-start space-y-2 md:space-y-3 py-4 md:py-8">
          <li>Woman’s Fashion</li>
          <li>Men’s Fashion</li>
          <li>Electronics</li>
          <li>Home & Lifestyle</li>
          <li>Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Baby’s & Toys</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>
      </aside>

      <Slider />
    </section>
  );
};

export default HeroSection;
