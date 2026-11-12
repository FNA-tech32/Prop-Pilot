import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="booking" className="scroll-mt-20">
      <div className="container mx-auto flex lg:flex-row flex-col relative ">
        <div className="hero__container--left flex-1 bg-primary rounded-ss-[50px] ">
          <div className="flex flex-col lg:pl-12 lg:pt-12 lg:gap-6 pl-6 pt-4 pr-4 gap-4 lg:mt-6 items-start mb-4 md:mb-0 xl:mt-16 py-5">
            <h1 className="text-[45px] lg:text-[54px] xl:text-[64px] m-0 text-left 2xl:text-[85px] leading-tight">
              Find your perfect place to stay
            </h1>
            <p className="m-0 font-normal leading-8 text-left text-[18px] lg:text-[20px] 2xl:text-[25px] text-gray-600">
              Discover top-rated luxury suites, corporate residences, and vacation hotels managed with excellence by Prop Pilot.
            </p>
            <div className="flex items-center gap-3 lg:mt-4 mt-1 cursor-pointer hover:opacity-80 transition">
              <img src="/video.png" alt="Watch video tour" />
              <p className="text-[18px] font-semibold 2xl:text-[25px] m-0 text-gray-800">
                Watch video tour
              </p>
            </div>
          </div>
        </div>
        <div className="hero__container--right flex-1 ">
          <div className="bg-primary">
            <img
              src="/hero.png"
              alt="Prop Pilot luxury stays"
              className="h-[20rem] w-full object-cover md:h-full"
            />
          </div>
        </div>
        <div className="absolute bottom-6 w-[88%] lg:w-[75%] mx-auto bg-white left-0 right-0 rounded-280 flex justify-between p-2 md:p-6 items-center shadow-lg border border-gray-100">
          {/* 1st */}
          <div className="flex items-center gap-2 pl-2">
            <img src="/pin.png" alt="Location pin" />
            <span className="flex flex-col gap-1">
              <p className="m-0 text-[14px] md:text-[18px] font-semibold text-[#222222]">
                Location
              </p>
              <p className="m-0 text-[#555555] text-[13px] hidden md:block">
                San Francisco, CA / London
              </p>
            </span>
          </div>
          {/* 2nd */}
          <div className="flex items-center gap-2 border-r border-gray-200 pr-2">
            <img src="/cale.png" alt="Calendar check in" />
            <span className="flex flex-col gap-1">
              <p className="m-0 text-[14px] md:text-[18px] font-semibold text-[#222222]">
                Check in
              </p>
              <p className="m-0 hidden md:block text-[#555555] text-[13px]">
                Select Date
              </p>
            </span>
          </div>
          {/* 3rd */}
          <div className="hidden lg:flex items-center gap-2 border-r border-gray-200 pr-2">
            <img src="/cale.png" alt="Calendar check out" />
            <span className="flex flex-col gap-1">
              <p className="m-0 text-[18px] font-semibold text-[#222222]">
                Check out
              </p>
              <p className="m-0 text-[#555555] text-[13px]">
                Select Date
              </p>
            </span>
          </div>
          {/* 4th */}
          <div className="hidden md:flex items-center gap-2 border-r border-gray-200 pr-2">
            <img src="/person.png" alt="Guests" />
            <span className="flex flex-col gap-1">
              <p className="m-0 text-[18px] font-semibold text-[#222222]">
                Guests
              </p>
              <p className="m-0 text-[#555555] text-[13px]">
                1 room, 2 guests
              </p>
            </span>
          </div>
          <Link to="/contact">
            <div className="bg-secondary flex gap-2 items-center px-4 md:px-8 py-3 rounded-280 cursor-pointer hover:bg-emerald-600 transition shadow">
              <img src="/search.png" alt="Search icon" />
              <p className="text-white font-semibold m-0 text-sm md:text-base">Search</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
