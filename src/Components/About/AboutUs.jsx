import React from "react";

const AboutUs = () => {
  return (
    <section id="about" className="mt-16 px-4 scroll-mt-20">
      <div className="container flex flex-col lg:flex-row gap-6 justify-center items-center mx-auto">
        {/* left section */}
        <div className="flex-1">
          <img
            className="object-cover w-full rounded-lg shadow-sm"
            src="/About.png"
            alt="About Prop Pilot"
          />
        </div>
        {/* Right section  */}
        <div className="flex-1 flex flex-col items-start justify-center gap-6">
          <h2 className="text-[40px] m-0 leading-[51px]">
            About Prop Pilot
          </h2>
          <p className="text-[16px] m-0 leading-[28px] text-gray-600">
            Prop Pilot is an innovative hospitality and real estate platform dedicated to connecting travelers, renters, and property seekers with premium hotels, modern workspaces, and luxury accommodations.
          </p>
          <p className="text-[16px] m-0 leading-[28px] text-gray-600">
            With vetted property listings, 24/7 dedicated customer care, and transparent pricing, Prop Pilot ensures a seamless journey from browsing to check-in. Whether planning a weekend getaway or seeking long-term stays, Prop Pilot is your reliable co-pilot in premium living.
          </p>
          <a href="/contact">
            <button className="primary-button mt-2 py-4 px-5 rounded-280 font-semibold">
              Get in Touch
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
