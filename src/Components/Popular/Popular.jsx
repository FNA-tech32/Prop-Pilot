import React from "react";
import Rating from "../Rating";

const Popular = () => {
  return (
    <section id="popular" className="mt-16 px-4 scroll-mt-20">
      <div className="container mx-auto ">
        {/* top */}
        <div className="flex flex-col gap-4">
          <h2 className="text-[40px] m-0 leading-[51px]">
            Our Most Popular Stays
          </h2>
          <div className="flex justify-between items-end flex-wrap gap-4">
            <p className="text-[16px] m-0 leading-[28px] text-gray-600">
              Discover the highest-rated hotels and residences handpicked by Prop Pilot for comfort, elegance, and prime locations.
            </p>
            <button className="text-secondary bg-[#24ab710b] rounded-[35px] px-6 py-4 font-semibold hover:bg-[#24ab70] hover:text-white transition">
              View All
            </button>
          </div>
        </div>
        {/* bottom */}
        <div className="gap-6 mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {/* 1st */}
          <div className="flex-1 bg-[#FAFAFA] rounded-2xl overflow-hidden hover:shadow-lg cursor-pointer transform hover:-translate-y-1 transition duration-300 ease-in-out border border-gray-100">
            <div>
              <img className="w-full h-56 object-cover" src="/hotel-1.png" alt="Danubius Hotel Regents Park" />
            </div>
            <div className="py-6 px-5 flex flex-col gap-2">
              <p className="m-0 text-[13px] font-semibold text-secondary">
                London NW8 7JT, England
              </p>
              <h3 className="m-0 text-[22px] font-bold text-gray-900">
                Danubius Hotel Regents Park
              </h3>
              <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-100">
                <p className="m-0 text-[16px] font-bold text-[#222222]">
                  $200 <span className="text-xs font-normal text-gray-500">/ night</span>
                </p>
                <Rating />
              </div>
            </div>
          </div>
          {/* 2nd */}
          <div className="flex-1 bg-[#FAFAFA] rounded-2xl overflow-hidden hover:shadow-lg cursor-pointer transform hover:-translate-y-1 transition duration-300 ease-in-out border border-gray-100">
            <div>
              <img className="w-full h-56 object-cover" src="/hotel-2.png" alt="The Resident Soho" />
            </div>
            <div className="py-6 px-5 flex flex-col gap-2">
              <p className="m-0 text-[13px] font-semibold text-secondary">
                Soho, London W1D 3SG, UK
              </p>
              <h3 className="m-0 text-[22px] font-bold text-gray-900">
                The Resident Soho
              </h3>
              <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-100">
                <p className="m-0 text-[16px] font-bold text-[#222222]">
                  $240 <span className="text-xs font-normal text-gray-500">/ night</span>
                </p>
                <Rating />
              </div>
            </div>
          </div>
          {/* 3rd */}
          <div className="flex-1 bg-[#FAFAFA] rounded-2xl overflow-hidden hover:shadow-lg cursor-pointer transform hover:-translate-y-1 transition duration-300 ease-in-out border border-gray-100">
            <div>
              <img className="w-full h-56 object-cover" src="/hotel3.png" alt="London Bridge Hotel" />
            </div>
            <div className="py-6 px-5 flex flex-col gap-2">
              <p className="m-0 text-[13px] font-semibold text-secondary">
                Southwark, London SE1 9QR, UK
              </p>
              <h3 className="m-0 text-[22px] font-bold text-gray-900">
                London Bridge Grand Hotel
              </h3>
              <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-100">
                <p className="m-0 text-[16px] font-bold text-[#222222]">
                  $290 <span className="text-xs font-normal text-gray-500">/ night</span>
                </p>
                <Rating />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular;
