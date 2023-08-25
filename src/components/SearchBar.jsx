import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cross, Search } from "../utils/Icons";
import CloseToOutClick from "../utils/CloseToOutClick";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchValue) return;

    navigate(`/search/${searchValue}`);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setSearchValue("");
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <CloseToOutClick onClose={() => setIsOpen(false)} className="relative">
        <button
          type="button"
          className="text-lg pt-0 md:pt-2 hover:text-white_100"
          onClick={handleToggle}
        >
          <Search />
        </button>
        <div
          className={`${
            isOpen
              ? "translate-x-0 opacity-100 visible"
              : "translate-x-full opacity-0 invisible"
          } search-bar absolute top-full right-0 transition-all duration-300 ease-out`}
        >
          <input
            type="text"
            name="search"
            id="search"
            value={searchValue}
            placeholder="Search for movies, Tv shows, person....."
            className="py-2 px-4 text-black_100 bg-white_100 outline-none border-none w-[60vw] max-w-[500px]"
            onChange={handleSearch}
          />
          <div
            className="absolute top-1/2 right-3 -translate-y-1/2 text-black_100 cursor-pointer"
            onClick={handleToggle}
          >
            <Cross />
          </div>
        </div>
      </CloseToOutClick>
    </form>
  );
};

export default SearchBar;
