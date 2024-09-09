import React from "react";
import jbl from "../../public/images/jbl.png";

const JBLSection = () => {
  return (
    <div className="h-[31.25rem] my-20">
      <div className="h-[31.25rem] flex flex-col md:flex-row  px-8 md:px-0 md:justify-evenly items-center relative gap-5 w-full bg-black">
        <div className="flex flex-col justify-center items-start h-full gap-5">
          <p className="text-[#00FF66] text-sm md:text-lg">Categories</p>
          <h1 className="text-white text-2xl md:text-[3rem] max-w-[27.688rem] [lineHeight:3.75rem] font-semibold">
            Enhance Your Music Experience
          </h1>
          <p className="text-white text-sm md:text-lg">
            Get the best deals on JBL Speakers
          </p>
          <button className="text-[#FAFAFA] h-[3.5rem] w-[10.688rem] rounded-[4px] bg-[#00FF66] px-4 py-2 mt-4">
            Shop Now
          </button>
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
