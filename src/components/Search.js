import React from "react";

function Search({ searchInput, setSearchInput , handleSearch }) {
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log("submitted");
  // }

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        //value={searchInput}
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
