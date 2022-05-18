// React
import React from "react";

// Libraries
import { BsArrowDownUp } from "react-icons/bs";

function Table({ className, shownSpots }) {
  return (
    <table className={className}>
      <thead>
        <tr>
          <th>
            <div className="flex--container">
              <span>Name</span>
              <BsArrowDownUp />
            </div>
          </th>
          <th>
            {" "}
            <div className="flex--container">
              <span>Country</span>
              <BsArrowDownUp />
            </div>
          </th>
          <th>
            {" "}
            <div className="flex--container">
              <span>Latitude</span>
              <BsArrowDownUp />
            </div>
          </th>
          <th>
            {" "}
            <div className="flex--container">
              <span>Longitude</span>
              <BsArrowDownUp />
            </div>
          </th>
          <th>
            {" "}
            <div className="flex--container">
              <span>Wind Prob.</span>
              <BsArrowDownUp />
            </div>
          </th>
          <th>
            {" "}
            <div className="flex--container">
              <span>When to go</span>
              <BsArrowDownUp />
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {shownSpots.map((spot) => (
          <tr key={spot.id}>
            <td>{spot.name}</td>
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
