import React, { useState, useEffect } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import { MdMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useDetectClickOutside({
    onTriggered: handleOutsideClick,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 781) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleToggleMenu() {
    setIsOpen((prev) => !prev);
  }

  function handleOutsideClick() {
    setIsOpen(false);
  }

  return (
    <header ref={ref} className="py-4 px-4 sticky top-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center ">
        <div className="logo">
          <NavLink to="/" className="flex items-center gap-2">
            <h2 className="text-2xl font-bold tracking-tight">
              <span className="text-[#24ab70]">Prop</span> Pilot
            </h2>
          </NavLink>
        </div>
        <nav
          className={`md:block z-10 ${
            !isOpen
              ? "hidden"
              : " absolute top-[5rem] right-[2rem] bg-white py-8 px-10 shadow-lg rounded-lg border border-gray-100"
          }`}
        >
          <ul
            className={`list-none p-0 list__style md:flex md:gap-8 flex-col md:flex-row ${
              !isOpen
                ? "hidden"
                : " flex-col gap-4 flex justify-start "
            }`}
          >
            <li>
              <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "text-[#24ab70] font-semibold" : "")}>
                Home
              </NavLink>
            </li>
            <li>
              <a href="/#facilities" onClick={() => setIsOpen(false)}>
                Facilities
              </a>
            </li>
            <li>
              <a href="/#about" onClick={() => setIsOpen(false)}>
                About Us
              </a>
            </li>
            <li>
              <a href="/#location" onClick={() => setIsOpen(false)}>
                Location
              </a>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "text-[#24ab70] font-semibold" : "")}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-4 ">
          <NavLink to="/login">
            <button className="rounded-[35px] py-2 px-6 primary-button text-sm font-semibold hover:opacity-95 transition-all">
              Login
            </button>
          </NavLink>
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
            onClick={handleToggleMenu}
            aria-label="Toggle Menu"
          >
            <MdMenu size={25} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
