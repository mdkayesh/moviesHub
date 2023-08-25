import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroSearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchValue) return;

    navigate(`/search/${searchValue}`);
  };

  return (
    <div className="search mt-6 relative z-10">
      <form
        action=""
        onSubmit={handleSubmit}
        className="bg-white_100 flex rounded-[99px] overflow-hidden"
      >
        <input
          type="text"
          name="search"
          id="hero-search"
          onChange={handleSearch}
          className="w-full bg-white_100 text-black_100 outline-none border-none py-2 px-5"
          placeholder="Search for movies, Tv shows, person....."
        />
        <button
          type="submit"
          className="gradient min-w-[100px] rounded-[99px] px-4"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default HeroSearchBar;
