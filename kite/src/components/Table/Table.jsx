// React
import React from "react";
import { useState } from "react";

// Libraries
import { AiFillStar } from "react-icons/ai";

// Components
import TableHeader from "./TableHeader";

function Table({ className, shownSpots }) {
  const [sortParams, setSortParams] = useState({
    sortKey: "",
    sortDirection: 0,
  });

  const numbers = ["lat", "long", "probability"];

  const tableHeadValues = [
    { name: "Name", sortKey: "name" },
    { name: "Country", sortKey: "country" },
    { name: "Latitude", sortKey: "lat" },
    { name: "Longitude", sortKey: "long" },
    { name: "Wind Prob.", sortKey: "probability" },
    { name: "When to go", sortKey: "month" },
  ];

  const monthsOrder = {
    January: 1,
    February: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12,
  };

  // Returns sorted array depending on the column
  const sortedSpots = () => {
    const sortKey = sortParams.sortKey;
    const sortDirection = sortParams.sortDirection;

    if (!sortKey || !sortDirection) return shownSpots;

    // Sort by month index, not by name
    if (sortKey === "month") {
      return [...shownSpots].sort(
        (spot1, spot2) =>
          sortDirection *
          (parseFloat(monthsOrder[spot1[sortKey]]) -
            parseFloat(monthsOrder[spot2[sortKey]]))
      );
    }

    // Sort number columns with parseFloat
    if (numbers.some((number) => number === sortKey)) {
      return [...shownSpots].sort(
        (spot1, spot2) =>
          sortDirection *
          (parseFloat(spot1[sortKey]) - parseFloat(spot2[sortKey]))
      );
    }

    // Sort string columns with compare
    else {
      return [...shownSpots].sort(
        (spot1, spot2) =>
          sortDirection * spot1[sortKey].localeCompare(spot2[sortKey])
      );
    }
  };

  return (
    <table className={className}>
      <thead>
        <tr>
          {tableHeadValues.map((tableHead, index) => (
            <TableHeader
              key={index}
              name={tableHead.name}
              sortKey={tableHead.sortKey}
              sortParams={sortParams}
              setSortParams={setSortParams}
            />
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedSpots().map((spot) => (
          <tr key={spot.id}>
            <td style={{ position: "relative" }}>
              {spot.name}{" "}
              {spot.favourite && (
                <span
                  style={{
                    position: "absolute",
                    transform: "translate(5px, 3px)",
                  }}
                >
                  <AiFillStar color="var(--clr-yellow)" />
                </span>
              )}
            </td>
            <td>{spot.country}</td>
            <td>{spot.lat}</td>
            <td>{spot.long}</td>
            <td>{spot.probability}%</td>
            <td>{spot.month}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
