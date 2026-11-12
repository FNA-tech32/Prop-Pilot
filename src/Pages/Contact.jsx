import React, { useState } from "react";
import { BiSend } from "react-icons/bi";
import {
  MdPhone,
  MdPhoneInTalk,
  MdEmail,
  MdAlternateEmail,
  MdLocationOn,
  MdAccessTime,
  MdSupportAgent,
  MdCheckCircle,
} from "react-icons/md";
import { useForm } from "react-hook-form";

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Contact form submitted:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

  return (
    <div className="bg-[#fcfdfd] min-h-screen pb-16">
      <div className="p-4 max-w-7xl m-auto">
        {/* Banner */}
        <div className="title-banner my-6 py-20 bg-secondary text-center rounded-2xl shadow-md sm:my-10">
          <span className="bg-white/20 text-white text-xs uppercase tracking-widest py-1 px-4 rounded-full font-semibold">
            Prop Pilot Support Center
          </span>
          <h1 className="text-3xl font-bold text-white mx-6 mt-4 md:text-5xl sm:text-4xl font-openSans">
            24/7 Full Support & Assistance
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto mt-4 px-4 text-sm md:text-base">
            Have questions about bookings, property listings, or partnerships? Reach out to the Prop Pilot team anytime. We're here around the clock.
          </p>
        </div>

        {/* Contact Information Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
          {/* Card 1: Phone Details */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 rounded-lg bg-[#24ab70]/10 text-[#24ab70] flex items-center justify-center mb-4 text-2xl">
              <MdPhone />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Call Us</h3>
            <p className="text-xs text-gray-500 mb-4">Direct phone support 24/7</p>

            <div className="space-y-3 text-sm">
              <div>
                <span className="text-[11px] font-semibold text-gray-400 uppercase block tracking-wider">
                  Primary Hotline
                </span>
                <a
                  href="tel:+18004567767"
                  className="font-medium text-gray-800 hover:text-[#24ab70] transition flex items-center gap-1.5"
                >
                  <MdPhoneInTalk className="text-[#24ab70]" />
                  +1 (800) 456-PROP (7767)
                </a>
              </div>

              <div className="pt-2 border-t border-gray-100">
                <span className="text-[11px] font-semibold text-gray-400 uppercase block tracking-wider">
                  Alternative Detail (Direct)
                </span>
                <a
                  href="tel:+15552347890"
                  className="font-medium text-gray-800 hover:text-[#24ab70] transition flex items-center gap-1.5"
                >
                  <MdPhoneInTalk className="text-[#24ab70]" />
                  +1 (555) 234-7890
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Email Details */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 rounded-lg bg-[#24ab70]/10 text-[#24ab70] flex items-center justify-center mb-4 text-2xl">
              <MdEmail />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Email Us</h3>
            <p className="text-xs text-gray-500 mb-4">Fast email response within 2 hours</p>

            <div className="space-y-3 text-sm">
              <div>
                <span className="text-[11px] font-semibold text-gray-400 uppercase block tracking-wider">
                  Primary Email
                </span>
                <a
                  href="mailto:contact@proppilot.com"
                  className="font-medium text-gray-800 hover:text-[#24ab70] transition flex items-center gap-1.5 break-all"
                >
                  <MdEmail className="text-[#24ab70]" />
                  contact@proppilot.com
                </a>
              </div>

              <div className="pt-2 border-t border-gray-100">
                <span className="text-[11px] font-semibold text-gray-400 uppercase block tracking-wider">
                  Alternative Detail (Support)
                </span>
                <a
                  href="mailto:support@proppilot.com"
                  className="font-medium text-gray-800 hover:text-[#24ab70] transition flex items-center gap-1.5 break-all"
                >
                  <MdAlternateEmail className="text-[#24ab70]" />
                  support@proppilot.com
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: Locations */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 rounded-lg bg-[#24ab70]/10 text-[#24ab70] flex items-center justify-center mb-4 text-2xl">
              <MdLocationOn />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Our Offices</h3>
            <p className="text-xs text-gray-500 mb-4">Global corporate hubs</p>

            <div className="space-y-3 text-sm">
              <div>
                <span className="text-[11px] font-semibold text-gray-400 uppercase block tracking-wider">
                  Main Headquarters
                </span>
                <p className="font-medium text-gray-800 m-0">
                  100 Innovation Way, Suite 400<br />
                  San Francisco, CA 94105, USA
                </p>
              </div>

              <div className="pt-2 border-t border-gray-100">
                <span className="text-[11px] font-semibold text-gray-400 uppercase block tracking-wider">
                  Alternative Office (UK Hub)
                </span>
                <p className="font-medium text-gray-800 m-0">
                  25 Canary Wharf, Suite 12<br />
                  London E14 5AB, UK
                </p>
              </div>
            </div>
          </div>

          {/* Card 4: Hours & Support */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 rounded-lg bg-[#24ab70]/10 text-[#24ab70] flex items-center justify-center mb-4 text-2xl">
              <MdSupportAgent />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Support Hours</h3>
            <p className="text-xs text-gray-500 mb-4">Always here when you need us</p>

            <div className="space-y-3 text-sm">
              <div>
                <span className="text-[11px] font-semibold text-gray-400 uppercase block tracking-wider">
                  Customer Assistance
                </span>
                <p className="font-medium text-gray-800 m-0 flex items-center gap-1.5">
                  <MdAccessTime className="text-[#24ab70]" />
                  24 Hours / 7 Days a Week
                </p>
              </div>

              <div className="pt-2 border-t border-gray-100">
                <span className="text-[11px] font-semibold text-gray-400 uppercase block tracking-wider">
                  Alternative / Concierge Desk
                </span>
                <p className="font-medium text-gray-800 m-0">
                  Mon - Sat: 8:00 AM – 10:00 PM EST<br />
                  Dedicated VIP assistance
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form and Side Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-12 bg-white p-6 sm:p-10 rounded-2xl border border-gray-100 shadow-sm">
          {/* Left Description Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                Send a Message
              </span>
              <h2 className="mt-2 text-3xl font-bold text-black font-openSans leading-snug">
                Get in touch with Prop Pilot
              </h2>
              <p className="my-4 text-gray-600 text-sm leading-relaxed font-openSans">
                Whether you want to inquire about premier hotel bookings, list your luxury property, or discuss custom accommodation needs, our Prop Pilot concierge team will respond quickly.
              </p>

              <div className="bg-[#f6fcf9] p-5 rounded-xl border border-[#24ab70]/20 my-6">
                <h4 className="font-bold text-gray-900 text-sm mb-2">
                  Need Immediate Booking Support?
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                  For urgent reservations or check-in queries, you can dial our 24/7 hotline directly or provide an alternative contact number in the form for priority callback.
                </p>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#24ab70]">
                  <MdPhoneInTalk />
                  <span>Call +1 (800) 456-PROP (7767)</span>
                </div>
              </div>
            </div>

            <div className="text-xs text-gray-500 pt-4 border-t border-gray-100">
              <p className="m-0">
                Prop Pilot values your privacy. We never share your contact information with third parties.
              </p>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            {submitted && (
              <div className="mb-6 p-4 bg-emerald-50 border border-[#24ab70] rounded-xl flex items-center gap-3 text-emerald-800">
                <MdCheckCircle className="text-2xl text-[#24ab70] shrink-0" />
                <div>
                  <h4 className="font-bold text-sm">Message received!</h4>
                  <p className="text-xs m-0">
                    Thank you for reaching out to Prop Pilot. A representative will contact you shortly using your provided details.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("fullName", { required: "Full name is required" })}
                  className="w-full border border-gray-300 text-sm rounded-lg px-4 py-3 outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition"
                  placeholder="e.g. Sarah Jenkins"
                />
                {errors.fullName && (
                  <p className="text-xs text-red-500 mt-1">{errors.fullName.message}</p>
                )}
              </div>

              {/* Primary Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1">
                    Primary Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Please enter a valid email address",
                      },
                    })}
                    className="w-full border border-gray-300 text-sm rounded-lg px-4 py-3 outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition"
                    placeholder="name@example.com"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1">
                    Primary Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    {...register("phone", { required: "Phone number is required" })}
                    className="w-full border border-gray-300 text-sm rounded-lg px-4 py-3 outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition"
                    placeholder="+1 (555) 000-0000"
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              {/* Alternative Detail Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50/80 p-4 rounded-xl border border-gray-200">
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1 flex items-center justify-between">
                    <span>Alternative Phone Detail</span>
                    <span className="text-[11px] text-gray-500 font-normal">Optional</span>
                  </label>
                  <input
                    type="tel"
                    {...register("altPhone")}
                    className="w-full bg-white border border-gray-300 text-sm rounded-lg px-4 py-2.5 outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition"
                    placeholder="e.g. +1 (555) 987-6543"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1 flex items-center justify-between">
                    <span>Alternative Email Detail</span>
                    <span className="text-[11px] text-gray-500 font-normal">Optional</span>
                  </label>
                  <input
                    type="email"
                    {...register("altEmail")}
                    className="w-full bg-white border border-gray-300 text-sm rounded-lg px-4 py-2.5 outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition"
                    placeholder="e.g. alt-contact@example.com"
                  />
                </div>
              </div>

              {/* Inquiry Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1">
                  Inquiry Topic
                </label>
                <select
                  {...register("topic")}
                  className="w-full border border-gray-300 text-sm rounded-lg px-4 py-3 outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition bg-white"
                >
                  <option value="hotel-booking">Hotel / Stay Reservation</option>
                  <option value="property-listing">List a Property on Prop Pilot</option>
                  <option value="corporate-booking">Corporate & Group Stays</option>
                  <option value="general-support">Customer Support & Inquiries</option>
                  <option value="partnership">Partnership & Media</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="4"
                  {...register("message", { required: "Message cannot be empty" })}
                  className="w-full border border-gray-300 text-sm rounded-lg px-4 py-3 outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition"
                  placeholder="How can Prop Pilot assist you? Let us know any specific dates or location preferences..."
                ></textarea>
                {errors.message && (
                  <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-secondary text-white text-sm font-bold rounded-lg shadow-sm hover:bg-[#1f9360] transition flex items-center justify-center gap-2"
                >
                  <span>Send Message to Prop Pilot</span>
                  <BiSend className="text-lg" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
