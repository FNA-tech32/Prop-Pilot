import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  Parallax,
  Pagination,
  Navigation,
} from "swiper/modules";

const testimonials = [
  {
    name: "Alexandr Ivchenko",
    role: "International Business Executive",
    image: "/testimonial.png",
    text: "Prop Pilot made booking our corporate stays effortless. The accommodations in London were immaculate, high-speed WiFi was rock solid, and their 24/7 support answered our late-night inquiries immediately. Highly recommended for business travelers.",
  },
  {
    name: "Elena Rostova",
    role: "Architect & Frequent Traveler",
    image: "/testimonial.png",
    text: "The curated selection of boutique stays on Prop Pilot is unmatched. The photos and amenity details matched reality perfectly. Their concierge even arranged airport transit for us. Seamless experience from start to finish!",
  },
  {
    name: "Marcus Vance",
    role: "Real Estate Investor",
    image: "/testimonial.png",
    text: "As someone who both books luxury vacation stays and lists high-end rental apartments, Prop Pilot has been a breath of fresh air. Responsive customer service, clear contact channels, and exceptional hospitality standards.",
  },
];

export default function SwiperComp() {
  return (
    <section className="mt-16 mx-4">
      <div className="container mx-auto">
        <div className="mb-8 text-center md:text-left">
          <span className="text-[#24ab70] font-semibold text-sm uppercase tracking-wider">
            Guest Experiences
          </span>
          <h2 className="text-[36px] md:text-[40px] font-bold text-gray-900 mt-1">
            What Our Guests Say About Prop Pilot
          </h2>
        </div>
        <Swiper
          style={{
            "--swiper-navigation-color": "#24ab70",
            "--swiper-pagination-color": "#24ab70",
          }}
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className="mySwiper rounded-2xl shadow-sm border border-gray-100"
        >
          <div
            slot="container-start"
            className="parallax-bg"
            style={{
              backgroundColor: "#FAFAFA",
            }}
            data-swiper-parallax="-23%"
          ></div>
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="md:flex-row flex-col-reverse flex items-center bg-[#FAFAFA] justify-between p-6 md:p-12 gap-6">
                <div
                  className="title lg:px-[3rem] px-2 flex-1"
                  data-swiper-parallax="-300"
                >
                  <p className="text-[16px] md:text-[18px] m-0 leading-[32px] text-gray-700 italic">
                    "{item.text}"
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-1">
                    {item.name}
                  </h3>
                  <p className="text-[14px] m-0 font-medium text-[#24ab70]">
                    {item.role}
                  </p>
                </div>
                <div
                  className="subtitle h-[320px] md:h-[380px] shrink-0"
                  data-swiper-parallax="-200"
                >
                  <img
                    className="h-full object-contain rounded-xl"
                    src={item.image}
                    alt={item.name}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
