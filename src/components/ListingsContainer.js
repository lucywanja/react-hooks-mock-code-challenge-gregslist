import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ searchResults }) {

  const listingCards= searchResults.map((listing) => {
    return ( <ListingCard
    
     listing={listing}
     key={listing.id}
     />);
  });
  
  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
