import React from "react";
import SectionTag from "./SectionTag";
import ps_img from "../../public/images/ps5.png";
import perfume_img from "../../public/images/perfum.png";
import woman_img from "../../public/images/attractive-woman-wearing-hat-posing-black-background 1.png";
import speaker_img from "../../public/images/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png";
import { Link } from "react-router-dom";

const NewArrivalSection = () => {
  return (
    <section className="my-[5rem] overflow-hidden px-4 xl:px-0">
      <div className="mb-[3.75rem]">
        <SectionTag name="Featured" />
        <h1 className="text-[1.875rem] md:text-[2.25rem] mt-[1.25rem] leading-tight md:[lineHeight:3rem] font-semibold">
          New Arrivals
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1.875rem] h-auto xl:h-[37.5rem]">
        <div className="bg-black h-full w-full rounded-[0.25rem] pt-[5.563rem] pl-[1.813rem] pr-[1.875rem] relative flex flex-col items-center lg:block">
          <img
            src={ps_img}
            alt="PlayStation 5"
            className="w-[20rem] h-[20rem] md:w-[25rem] md:h-[25rem] xl:w-[31.938rem] xl:h-[31.938rem]"
          />
          <div className="absolute left-[2rem] bottom-[2rem] w-[15.125rem] h-[7rem] text-white flex flex-col gap-[1rem]">
            <h1 className="text-[1.25rem] md:text-[1.5rem] font-semibold">
              PlayStation 5
            </h1>
            <p className="text-[#FAFAFA] text-[0.875rem] leading-[1.313rem]">
              Black and White version of the PS5 coming out on sale.
            </p>
            <Link to="/shop" className="text-[1rem] border-b-[1px] w-fit">
              Shop Now
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[2rem] gap-x-[1.875rem]">
          <div className="col-span-2 bg-black h-auto md:h-[17.5rem] rounded-[0.25rem] relative overflow-hidden flex flex-col items-center md:pl-[8.625rem]">
            <div className="absolute left-[2rem] bottom-[2rem] w-[15.125rem] h-[7rem] text-white flex flex-col gap-[1rem]">
              <h1 className="text-[1.25rem] md:text-[1.5rem] font-semibold">
                Women’s Collections
              </h1>
              <p className="text-[#FAFAFA] text-[0.875rem] leading-[1.313rem]">
                Featured woman collections that give you another vibe.
              </p>
              <Link to="/shop" className="text-[1rem] border-b-[1px] w-fit">
                Shop Now
              </Link>
            </div>
            <img
              src={woman_img}
              alt="Women's Collections"
              className="w-[15rem] h-[10rem] md:w-[20rem] md:h-[15rem] xl:w-[27rem] xl:h-[17.875rem]"
            />
          </div>

          <div className="bg-black h-[17.75rem] w-full rounded-[0.25rem] relative overflow-hidden flex flex-col items-center md:px-[2.5rem] md:py-[1.938rem]">
            <img
              src={speaker_img}
              alt="Speakers"
              className="w-[11rem] h-[12rem] md:w-[11.875rem] md:h-[13.813rem]"
            />
            <div className="absolute left-[1.5rem] bottom-[1.5rem] w-[11.938rem] h-[5.313rem] text-white flex flex-col gap-[0.5rem]">
              <h1 className="text-[1.25rem] md:text-[1.5rem] font-semibold">
                Speakers
              </h1>
              <p className="text-[#FAFAFA] text-[0.875rem] leading-[1.313rem]">
                Amazon wireless speakers
              </p>
              <Link to="/shop" className="text-[1rem] border-b-[1px] w-fit">
                Shop Now
              </Link>
            </div>
          </div>

          <div className="bg-black h-[17.75rem] w-full rounded-[0.25rem] relative overflow-hidden flex flex-col items-center md:pl-[2.125rem] md:pr-[2.188rem] md:pt-[2.375rem] md:pb-[2.688rem]">
            <img
              src={perfume_img}
              alt="Perfumes"
              className="w-[10rem] h-[10rem] md:w-[12.563rem] md:h-[12.688rem]"
            />
            <div className="absolute left-[1.5rem] bottom-[1.5rem] w-[11.938rem] h-[5.313rem] text-white flex flex-col gap-[0.5rem]">
              <h1 className="text-[1.25rem] md:text-[1.5rem] font-semibold">
                Perfumes
              </h1>
              <p className="text-[#FAFAFA] text-[0.875rem] leading-[1.313rem]">
                GUCCI INTENSE OUD EDP
              </p>
              <Link to="/shop" className="text-[1rem] border-b-[1px] w-fit">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivalSection;
