// React
import React from "react";
import { useState, useEffect } from "react";

// Components
import { StyledTable } from "../Table/Table.styles";
import { StyledSearchInput } from "../SearchInput/SearchInput.styles";

function Locations({ className, spots }) {
  const [searchFilter, setSearchFilter] = useState("");
  const [shownSpots, setShownSpots] = useState([]);

  useEffect(() => {
    setShownSpots(
      spots.filter((spot) => spot.name.toLowerCase().includes(searchFilter))
    );
  }, [searchFilter]);

  return (
    <div className={className}>
      <h1>Locations</h1>
      <StyledSearchInput
        searchInputLabel="Search..."
        searchInputLabelSize="16px"
        searchInputLabelColor="rgba(0, 0, 0, 0.87)"
        width="360px"
        height="42px"
        backgroundColor="var(--clr-mid-gray)"
        setSearchFilter={setSearchFilter}
        debounceTimeMs={500}
      />
      {!shownSpots.length ? (
        <h2>No search matches the criteria.</h2>
      ) : (
        <StyledTable shownSpots={shownSpots} />
      )}
    </div>
  );
}

export default Locations;
