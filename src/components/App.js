import React, { useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  // Components need acces to the states: listcontainer and search

  const[listings, setListings] = useState([]);

  const [searchInput, setSearchInput] = useState("");

  const[searchQuery, setSearchQuery] = useState("");


// add the useEffect hook fetches the list from the backend when the component mounts
  useEffect(() => {
    fetch(" http://localhost:6001/listings")
    .then((r) => r.json())
    .then((listingsData) => setListings(listingsData))
  }, []);

// filter the listings based on the searchInput
  const searchResults = listings.filter((listing) => {
    if(searchInput === "") return true;

    return listing.description.toLowerCase().includes(searchQuery.toLowerCase())
  })

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(searchInput);
  };

  return (
    <div className="app">
      <Header 
      searchInput={searchInput}
      setSearchInput={setSearchInput}
      handleSearch={handleSearch}
      />
      <ListingsContainer 
      searchResults={searchResults}
       />

    </div>
  );
}

export default App;

// The App component fetches listings and manages the search input state.
// The Header component contains the search functionality.
// The Search component allows the user to input search terms.
// The ListingsContainer component displays the filtered listings.
// The ListingCard component allows users to favorite/unfavorite and delete listings, updating both the frontend and backend as necessary.
