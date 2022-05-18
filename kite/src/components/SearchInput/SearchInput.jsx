import React from "react";
import { useMemo, useEffect } from "react";

// Libraries
import { AiOutlineSearch } from "react-icons/ai";
import { debounce } from "lodash";

function SearchInput({
  className,
  searchInputLabel,
  setSearchFilter,
  debounceTimeMs,
}) {
  const handleInputChange = (e) => {
    setSearchFilter(e.target.value);
  };

  const debouncedSearch = useMemo(
    () => debounce(handleInputChange, debounceTimeMs),
    []
  );

  useEffect(() => {
    return () => debouncedSearch.cancel();
  });

  return (
    <div className={className}>
      <AiOutlineSearch className="search-icon" />
      <input
        type={"text"}
        placeholder={searchInputLabel}
        onChange={debouncedSearch}
      />
    </div>
  );
}

export default SearchInput;
