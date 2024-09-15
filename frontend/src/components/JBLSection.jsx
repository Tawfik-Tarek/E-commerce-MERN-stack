import React, { useState, useEffect } from "react";
import jbl from "../../public/images/jbl.png";
import { Link } from "react-router-dom";

const JBLSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 5);

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-[31.25rem] my-20">
      <div className="h-[31.25rem] flex flex-col md:flex-row  px-8 md:justify-evenly items-center relative gap-5 w-full bg-black">
        <div className="flex flex-col justify-center items-start h-full gap-5">
          <p className="text-[#00FF66] text-sm md:text-lg">Categories</p>
          <h1 className="text-white text-2xl md:text-[3rem] max-w-[27.688rem] [lineHeight:3.75rem] font-semibold">
            Enhance Your Music Experience
          </h1>
          <div className="flex gap-3 items-center">
            <p className="flex flex-col items-center justify-center bg-white w-[4rem] h-[4rem] rounded-full">
              <span className="block font-semibold [lineHeight:14px]">
                {timeLeft.days}
              </span>
              <span className="block text-sm">Days</span>
            </p>
            <p className="flex flex-col items-center justify-center bg-white w-[4rem] h-[4rem] rounded-full">
              <span className="block font-semibold [lineHeight:14px]">
                {timeLeft.hours}
              </span>
              <span className="block text-sm">Hours</span>
            </p>
            <p className="flex flex-col items-center justify-center bg-white w-[4rem] h-[4rem] rounded-full">
              <span className="block font-semibold [lineHeight:14px]">
                {timeLeft.minutes}
              </span>
              <span className="block text-sm">Minutes</span>
            </p>
            <p className="flex flex-col items-center justify-center bg-white w-[4rem] h-[4rem] rounded-full">
              <span className="block font-semibold [lineHeight:14px]">
                {timeLeft.seconds}
              </span>
              <span className="block text-sm">Seconds</span>
            </p>
          </div>
          <Link
            to={"/shop"}
            aria-label="go to shop"
            className="text-[#1E2329]  h-[3.5rem] w-[10.688rem] rounded-[4px] bg-[#00FF66] px-4 py-2 mt-4 flex justify-center items-center"
          >
            Shop Now
          </Link>
        </div>
        <div className=" jbl-img justify-center hidden md:flex items-center">
          <img
            src={jbl}
            alt="JBL Speakers"
            className=" h-[20.625rem] w-[35.5rem] object-contain"
            width={200}
            height={200}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default JBLSection;
