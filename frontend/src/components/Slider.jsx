import React, { useEffect } from "react";
import apple from "../../public/images/apple.png";
import hero from "../../public/images/hero.png";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const slides = [
    {
      id: 1,
      image: hero,
      title: "Apple Products",
      description: "Up to 10% off Voucher",
    },
    {
      id: 2,
      image: hero,
      title: "Hero Products",
      description: "Get the best deals",
    },
  ];

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === slides.length - 1 ? 0 : current + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [current, slides]);

  return (
    <div className="relative w-full max-w-full overflow-hidden">
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
                  className="flex items-center justify-between px-4 md:px-12 text-white"
                >
                  <div className="p-4 md:p-8">
                    <div className="flex items-center justify-start gap-2 mb-3 md:mb-5">
                      <img src={apple} alt="apple" className="w-10 h-auto" />
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
                  <div className="hidden md:block">
                    <img
                      src={slide.image}
                      className="object-cover w-[31rem] h-[22rem]"
                      alt="hero"
                      loading="lazy"
                      
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
      </div>
    </div>
  );
};

export default Slider;
