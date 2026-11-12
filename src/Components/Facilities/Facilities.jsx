import React from "react";
import { Link } from "react-router-dom";
import {
  MdOutlineComputer,
  MdOutlinePushPin,
  MdOutlineDinnerDining,
  MdOutlineWifi,
  MdElectricBolt,
  MdOutlineWater,
  MdSportsMartialArts,
  MdCheckCircleOutline,
} from "react-icons/md";

const Facilities = () => {
  return (
    <section id="facilities" className="px-4 mt-16 scroll-mt-20">
      <div className="container mx-auto flex flex-col lg:flex-row lg:gap-4 gap-12 ">
        {/* left section  */}
        <div className="lg:w-1/3 ">
          <h2 className="text-[40px] m-0 leading-[51px]">
            We provide our best facilities for you
          </h2>
          <p className="leading-[28px] text-gray-600 mt-4">
            At Prop Pilot, every property is hand-picked and outfitted with world-class amenities to ensure a productive, relaxing, and unforgettable stay.
          </p>
          <Link to="/contact">
            <button className="primary-button py-4 px-6 rounded-280 font-semibold mt-4">
              Contact Now
            </button>
          </Link>
        </div>
        {/* right section  */}

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:w-2/3">
          <div className="flex flex-col items-center py-6 px-4 gap-2 justify-center bg-white rounded-xl shadow-sm hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
            <div>
              <MdOutlineComputer size={35} color="#24ab70" />
            </div>
            <p className="font-medium text-gray-700">Private Workspace</p>
          </div>
          <div className="flex flex-col items-center py-6 px-4 gap-2 justify-center bg-white rounded-xl shadow-sm hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
            <div>
              <MdOutlinePushPin size={35} color="#24ab70" />
            </div>
            <p className="font-medium text-gray-700">Parking Area</p>
          </div>
          <div className="flex flex-col items-center py-6 px-4 gap-2 justify-center bg-white rounded-xl shadow-sm hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
            <div>
              <MdOutlineDinnerDining size={35} color="#24ab70" />
            </div>
            <p className="font-medium text-gray-700">Breakfast</p>
          </div>
          <div className="flex flex-col items-center py-6 px-4 gap-2 justify-center bg-white rounded-xl shadow-sm hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
            <div>
              <MdOutlineWifi size={35} color="#24ab70" />
            </div>
            <p className="font-medium text-gray-700">Free High-Speed Wifi</p>
          </div>
          <div className="flex flex-col items-center py-6 px-4 gap-2 justify-center bg-white rounded-xl shadow-sm hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
            <div>
              <MdElectricBolt size={35} color="#24ab70" />
            </div>
            <p className="font-medium text-gray-700">24/7 Power Backup</p>
          </div>
          <div className="flex flex-col items-center py-6 px-4 gap-2 justify-center bg-white rounded-xl shadow-sm hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
            <div>
              <MdOutlineWater size={35} color="#24ab70" />
            </div>
            <p className="font-medium text-gray-700">Swimming Pool</p>
          </div>
          <div className="flex flex-col items-center py-6 px-4 gap-2 justify-center bg-white rounded-xl shadow-sm hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
            <div>
              <MdSportsMartialArts size={35} color="#24ab70" />
            </div>
            <p className="font-medium text-gray-700">Fitness Center</p>
          </div>
          <div className="flex flex-col items-center py-6 px-4 gap-2 justify-center bg-white rounded-xl shadow-sm hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
            <div>
              <MdCheckCircleOutline size={35} color="#24ab70" />
            </div>
            <p className="font-medium text-gray-700">Concierge Service</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
