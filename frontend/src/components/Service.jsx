import React from "react";

const Service = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col justify-center items-center text-black">
      <div className="mb-[1.5rem] bg-[#2F2E30] bg-opacity-30 w-[5rem] h-[5rem] rounded-full flex justify-center items-center select-none">
        <div className="bg-black w-[3.625rem] h-[3.625rem] rounded-full  flex justify-center items-center">
          {icon}
        </div>
      </div>
      <h3 className="text-[1.25rem] font-semibold [lineHeight:1.75rem] text-center mb-[0.5rem]">
        {title}
      </h3>
      <p className="text-center text-[0.875] [lineHeight:1.313rem]">
        {description}
      </p>
    </div>
  );
};

export default Service;
