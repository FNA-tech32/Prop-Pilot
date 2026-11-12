import React from "react";

const Map = () => {
  return (
    <section id="location" className="mt-16 scroll-mt-20">
      <div className="container mx-auto h-[677px] relative">
        <div
          className="h-full w-full"
          style={{
            position: "relative",
          }}
        >
          {/* Google Map iframe */}
          <iframe
            title="Prop Pilot Locations Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60502.96642095626!2d73.67601878315675!3d18.599476123009214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbc048041bef%3A0xd0c9eb5ac3c3dee5!2sHinjawadi%2C%20Pune%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1707756827316!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{
              border: 0,
              position: "absolute",
              top: 0,
              left: 0,
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          {/* Overlay content */}
          <div
            className="flex flex-col items-center xl:flex-row gap-4 shadow-xl"
            style={{
              position: "absolute",
              bottom: "3rem",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              padding: "24px",
              borderRadius: "16px",
              maxWidth: "90%",
            }}
          >
            {/* Left section */}
            <div className="mb-4 md:mb-0 md:mr-4">
              <h2 className="text-[32px] md:text-[36px] m-0 font-bold leading-tight text-gray-900">
                Explore Prop Pilot Destinations
              </h2>
              <p className="text-[15px] m-0 leading-6 text-gray-600 mt-2">
                Discover hotels, serviced apartments, and luxury villas conveniently situated in vibrant metropolitan centers and peaceful getaways.
              </p>
            </div>
            {/* Right section */}
            <form onSubmit={(e) => { e.preventDefault(); alert("Thank you for subscribing to Prop Pilot updates!"); }} className="flex w-full md:w-auto">
              <input
                type="email"
                required
                placeholder="Enter your email for city guides"
                className="px-4 py-2 border border-gray-300 rounded-l-md text-[15px] outline-none focus:border-[#24ab70] min-w-[220px]"
              />
              <button type="submit" className="primary-button px-5 py-2 text-white font-medium rounded-r-md">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
