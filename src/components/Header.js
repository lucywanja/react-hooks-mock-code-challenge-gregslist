import React from "react";
import Search from "./Search";

function Header({ searchInput, setSearchInput, handleSearch }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search
      searchInput={searchInput}
      setSearchInput={setSearchInput} 
      handleSearch={handleSearch}
      />
    </header>
  );
}

export default Header;
