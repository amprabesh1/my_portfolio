/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
*/

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../../styles.js";
import { navLinks } from "../../Constants/constants";
import { bl33hIcon, menu, close } from "../../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  // ✅ Scroll-based active detection (no UI changes)
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisible = null;
        let maxRatio = 0;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisible = entry.target;
          }
        });

        if (mostVisible?.id) {
          setActive(mostVisible.id);
        }
      },
      {
        threshold: [0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav
      className={`
        ${styles.paddingX} w-full flex items-center py-5
        fixed top-0 z-20 bg-transparent
      `}
    >
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">

        {/* ✅ Logo (unchanged) */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={bl33hIcon} alt="logo" className="w-18 h-9 object-contain" />
        </Link>

        {/* ✅ Desktop Menu (unchanged visually) */}
        <ul className="list-none hidden sm:flex flex-row gap-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setActive(link.id)}
                className={`
                  px-6 py-2 rounded-xl text-[18px] font-semibold transition-all duration-300
                  border-2 border-[#1E3A8A]
                  ${
                    active === link.id
                      ? "bg-[#1E3A8A] text-white"
                      : "text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white"
                  }
                `}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* ✅ Mobile Menu (unchanged visually) */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            className="w-[28px] h-[28px] object-contain cursor-pointer z-20"
            onClick={() => setToggle(!toggle)}
            src={toggle ? close : menu}
            alt="menu"
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } pt-20 p-6 bg-white absolute top-2 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl shadow-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4 w-full">
              {navLinks.map((link) => (
                <li key={link.id} className="w-full">
                  <a
                    href={`#${link.id}`}
                    onClick={() => {
                      setActive(link.id);
                      setToggle(!toggle);
                    }}
                    className={`
                      block w-full text-center px-4 py-2 rounded-lg text-[16px] font-medium transition-all
                      border border-[#1E3A8A]
                      ${
                        active === link.id
                          ? "bg-[#1E3A8A] text-white"
                          : "text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white"
                      }
                    `}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
