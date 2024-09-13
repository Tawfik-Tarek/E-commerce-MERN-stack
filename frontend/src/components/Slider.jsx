import React, { useEffect } from "react";
import apple from "../../public/images/apple.png";
import iphone from "../../public/images/hero.png";
import samsung from "../../public/images/samsung.png";
import samsungLogo from "../../public/images/samsung_logo.png";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const slides = [
    {
      id: 1,
      image: iphone,
      title: "Apple Products",
      description: "Up to 10% off Voucher",
      logo : apple
    },
    {
      id: 2,
      image: samsung,
      title: "Samsung Products",
      description: "Get the best deals",
      logo : samsungLogo
    },
  ];

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };


  return (
    <div className="relative w-full max-w-full overflow-hidden pt-[2.5rem]">
      <div className="relative bg-black w-full h-[21.5rem] md:h-[25rem] overflow-hidden">
        <AnimatePresence mode="wait">
          {slides.map(
            (slide, index) =>
              index === current && (
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center w-full justify-evenly h-full  md:justify-between px-4 md:px-12 text-white"
                >
                  <div className="p-4 md:p-8">
                    <div className="flex items-center justify-start gap-2 mb-3 md:mb-5">
                      <img src={slide.logo} alt="apple" className="w-10 h-10 select-none"  width={200} height={200} />
                      <h1 className="text-base md:text-lg font-semibold">
                        {slide.title}
                      </h1>
                    </div>
                    <p className="text-lg md:text-3xl font-semibold mb-3 md:mb-5 max-w-xs md:max-w-lg">
                      {slide.description}
                    </p>
                    <Link
                      to="/shop"
                      className="text-white text-sm md:text-base cursor-pointer flex items-center gap-2"
                    >
                      <span className="border-solid border-b-1 border-white">Shop Now</span>
                      <FaArrowRight size={16} />
                    </Link>
                  </div>
                  <div className="">
                    <img
                      src={slide.image}
                      className="object-contain w-[15rem] h-[22rem]  lg:w-[31rem] lg:h-[22rem] select-none"
                      alt="hero"
                      width = "100%"
                      height = "100%"
                    />
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>

        <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 md:px-8">
          <span
            onClick={prevSlide}
            className="text-white text-xl md:text-2xl cursor-pointer"
          >
            &#10094;
          </span>
          <span
            onClick={nextSlide}
            className="text-white text-xl md:text-2xl cursor-pointer"
          >
            &#10095;
          </span>
        </div>
        <AnimatePresence
          initial={false}
          custom={current}
          mode="wait"
          onExitComplete={() => null}
        >
          <motion.div className="absolute bottom-[0.688rem] left-0 right-0 flex justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {slides.map((slide, index) => (
              <motion.div
                key={slide.id}
                className={`w-2 h-2 rounded-full cursor-pointer ${
                  index === current ? "bg-red-500" : "bg-gray-500"
                }`}
                onClick={() => setCurrent(index)}
              ></motion.div>
            ))}


          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Slider;
