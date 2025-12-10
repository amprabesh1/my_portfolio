import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../../styles.js";
import { navLinks } from "../../Constants/constants";
import { bl33hIcon, menu, close } from "../../assets";

const Navbar = () => {
  const [active, setActive] = useState("about");
  const [toggle, setToggle] = useState(false);

  // ✅ SCROLL SPY LOGIC (THIS FIXES YOUR PROBLEM)
  useEffect(() => {
    const sections = navLinks.map((link) =>
      document.getElementById(link.id)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6, // section must be 60% visible
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => window.scrollTo(0, 0)}
        >
          <img
            src={bl33hIcon}
            alt="logo"
            className="w-9 h-9 object-contain"
          />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="list-none hidden sm:flex flex-row gap-6">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`px-5 py-1 rounded-full border-2 transition-all font-bold text-[16px]
                ${
                  active === link.id
                    ? "bg-[#1E3A8A] text-white border-[#1E3A8A]"
                    : "text-[#1E3A8A] border-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white"
                }
              `}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* MOBILE MENU */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            className="w-[28px] h-[28px] cursor-pointer z-20"
            onClick={() => setToggle(!toggle)}
            src={toggle ? close : menu}
            alt="menu"
          />

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } absolute top-20 right-4 bg-[#1E3A8A] rounded-xl p-6 z-10`}
          >
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`text-white font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(false);
                    document
                      .getElementById(link.id)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {link.title}
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
