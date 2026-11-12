import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGooglePlay,
  FaAppStoreIos,
} from "react-icons/fa";
import { MdPhone, MdEmail, MdLocationOn, MdHeadsetMic } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="text-white">
      <div className="container mx-auto">
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Info */}
          <div>
            <div className="logo mb-4">
              <h2 className="text-2xl font-bold tracking-tight text-white">
                <span className="text-[#24ab70]">Prop</span> Pilot
              </h2>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Prop Pilot is your premier real estate and luxury stay platform. Find handpicked hotels, serviced residences, and verified stays with 24/7 dedicated support.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#24ab70] flex items-center justify-center transition text-white"
              >
                <FaFacebookF size={14} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#24ab70] flex items-center justify-center transition text-white"
              >
                <FaTwitter size={14} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#24ab70] flex items-center justify-center transition text-white"
              >
                <FaInstagram size={14} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#24ab70] flex items-center justify-center transition text-white"
              >
                <FaLinkedinIn size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-800 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-[#24ab70] transition">
                  Home
                </Link>
              </li>
              <li>
                <a href="/#facilities" className="hover:text-[#24ab70] transition">
                  Facilities & Amenities
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:text-[#24ab70] transition">
                  About Prop Pilot
                </a>
              </li>
              <li>
                <a href="/#location" className="hover:text-[#24ab70] transition">
                  Destinations & Location
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#24ab70] transition">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details & Alternative Details */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-800 pb-2">
              Contact Details
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MdPhone className="text-[#24ab70] text-lg mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-white text-xs uppercase tracking-wider text-gray-400">
                    Primary Phone
                  </p>
                  <a href="tel:+18004567767" className="hover:text-[#24ab70] transition">
                    +1 (800) 456-PROP (7767)
                  </a>
                  <p className="font-semibold text-white text-xs uppercase tracking-wider text-gray-400 mt-1">
                    Alternative Phone
                  </p>
                  <a href="tel:+15552347890" className="hover:text-[#24ab70] transition">
                    +1 (555) 234-7890
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MdEmail className="text-[#24ab70] text-lg mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-white text-xs uppercase tracking-wider text-gray-400">
                    Primary Email
                  </p>
                  <a href="mailto:contact@proppilot.com" className="hover:text-[#24ab70] transition">
                    contact@proppilot.com
                  </a>
                  <p className="font-semibold text-white text-xs uppercase tracking-wider text-gray-400 mt-1">
                    Alternative Email
                  </p>
                  <a href="mailto:support@proppilot.com" className="hover:text-[#24ab70] transition">
                    support@proppilot.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MdLocationOn className="text-[#24ab70] text-lg mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-white text-xs uppercase tracking-wider text-gray-400">
                    Headquarters
                  </p>
                  <span>100 Innovation Way, Suite 400, San Francisco, CA 94105</span>
                  <p className="font-semibold text-white text-xs uppercase tracking-wider text-gray-400 mt-1">
                    Alternative Office
                  </p>
                  <span>25 Canary Wharf, London E14 5AB, United Kingdom</span>
                </div>
              </li>
            </ul>
          </div>

          {/* App & Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-800 pb-2">
              Download App & Support
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Book hotel stays and manage your properties on the go with the Prop Pilot mobile app.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="#app-store"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition px-4 py-2.5 rounded-lg border border-white/10"
              >
                <FaAppStoreIos size={24} className="text-white" />
                <div className="text-left">
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider m-0 leading-tight">
                    Download on the
                  </p>
                  <p className="text-sm font-semibold text-white m-0 leading-tight">
                    Apple App Store
                  </p>
                </div>
              </a>
              <a
                href="#google-play"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition px-4 py-2.5 rounded-lg border border-white/10"
              >
                <FaGooglePlay size={22} className="text-white" />
                <div className="text-left">
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider m-0 leading-tight">
                    Get it on
                  </p>
                  <p className="text-sm font-semibold text-white m-0 leading-tight">
                    Google Play
                  </p>
                </div>
              </a>
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
              <MdHeadsetMic className="text-[#24ab70] text-base" />
              <span>24/7 Dedicated Support Hotline</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <p className="m-0">
            &copy; {new Date().getFullYear()} Prop Pilot. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-white transition">
              Terms of Service
            </a>
            <a href="#cookies" className="hover:text-white transition">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
