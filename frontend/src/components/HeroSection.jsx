import React from "react";
import { Link } from "react-router-dom";
import Slider from "./Slider";

const categories = [
  "Woman’s Fashion",
  "Men’s Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby’s & Toys",
  "Groceries & Pets",
  "Health & Beauty"
];

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-stretch relative gap-5 w-full">
      <aside className="flex-none border-r md:border-black pt-[2.5rem] w-full  md:w-1/5">
        <ul className="flex md:flex-col justify-center items-center md:justify-start md:w-[13.563rem] gap-[15px] md:gap-0 flex-wrap md:flex-nowrap md:items-start md:h-[24rem] md:space-y-3 md:py-2">
          {categories.map((category, index) => (
            <li key={index}>
              <Link to={`/notARealLink/${category.replace(/[\s&’]+/g, "-").toLowerCase()}`}
                className="hover:opacity-70 transition-all duration-300 ease-in"
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      <Slider />
    </section>
  );
};

export default HeroSection;
