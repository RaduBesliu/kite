// React
import React from "react";

// Libraries
import { BsArrowUp, BsArrowDown, BsArrowDownUp } from "react-icons/bs";

function TableHeader({ name, sortKey, sortParams, setSortParams }) {
  const handleClick = (e) => {
    e.preventDefault();

    // Sort on 3 direction: ascending, descending, default
    if (sortParams.sortKey === sortKey) {
      setSortParams({
        sortKey,
        sortDirection:
          sortParams.sortDirection + 1 > 1 ? -1 : sortParams.sortDirection + 1,
      });
    } else {
      setSortParams({ sortKey, sortDirection: 1 });
    }
  };

  return (
    <th>
      <div className="flex-container">
        <span>{name}</span>
        {sortKey !== sortParams.sortKey || !sortParams.sortDirection ? (
          <BsArrowDownUp className="sort-icon" onClick={handleClick} />
        ) : sortParams.sortDirection === -1 ? (
          <BsArrowUp className="sort-icon" onClick={handleClick} />
        ) : (
          <BsArrowDown className="sort-icon" onClick={handleClick} />
        )}
      </div>
    </th>
  );
}

export default TableHeader;
