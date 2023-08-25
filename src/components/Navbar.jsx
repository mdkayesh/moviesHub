import React, { useEffect, useState } from "react";
import { Menu, MoviePlay } from "../utils/Icons";
import { Link, NavLink } from "react-router-dom";
import styles from "../utils/styles";
import SearchBar from "./SearchBar";
import CloseToOutClick from "../utils/CloseToOutClick";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const handleIsOpen = () => {
    setisOpen(!isOpen);
  };

  useEffect(() => {
    let prevScrollpos = window.scrollY;
    const handleScroll = () => {
      let currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos) {
        currentScrollPos < 100
          ? setIsScroll("top-0 bg-transparent")
          : setIsScroll("bg-bg_secondary top-0");
      } else {
        setIsScroll("-top-full");
      }
      prevScrollpos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`navbar fixed left-0 w-full py-3 ${isScroll} ${styles.paddingX} z-50 transition-all duration-500 ease-in-out`}
    >
      <div className="container flex justify-between items-center">
        <Link to={"/"} className="text-gradient w-fit flex gap-2 items-center">
          <MoviePlay className="text-3xl text-primary" />
          <span className="font-bold text-lg">MoviesHub</span>
        </Link>

        <nav className="flex gap-2 items-center">
          <ul className="hidden gap-4 items-center md:flex [&_.active]:text-white_100">
            <li>
              <NavLink
                to={"/explore/movie"}
                className="hover:text-white_100 transition-colors duration-300"
              >
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/explore/tv"}
                className="hover:text-white_100 transition-colors duration-300"
              >
                Tv Shows
              </NavLink>
            </li>
          </ul>

          {/* mobile nav */}
          <CloseToOutClick onClose={() => setisOpen(false)}>
            <button
              type="button"
              className="text-2xl md:hidden"
              onClick={handleIsOpen}
            >
              <Menu />
            </button>
            <div
              className={`${
                isOpen ? "max-h-[200px]" : "max-h-0"
              } fixed top-[53px] right-0 w-full bg-bg_secondary overflow-hidden transition-all duration-500 ease-in-out md:hidden`}
              onClose={() => setisOpen(false)}
            >
              <ul className="container flex flex-col gap-4 p-5">
                <li onClick={handleIsOpen}>
                  <NavLink
                    to={"/explore/movie"}
                    className="hover:text-white_100 transition-colors duration-300 block"
                  >
                    Movies
                  </NavLink>
                </li>
                <li onClick={handleIsOpen}>
                  <NavLink
                    to={"/explore/tv"}
                    className="hover:text-white_100 transition-colors duration-300 block"
                  >
                    Tv Shows
                  </NavLink>
                </li>
              </ul>
            </div>
          </CloseToOutClick>
          <SearchBar />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
