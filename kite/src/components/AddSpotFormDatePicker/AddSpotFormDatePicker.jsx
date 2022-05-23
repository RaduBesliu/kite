// React
import React from "react";
import { useState, useEffect } from "react";

// Libraries
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useSelector, useDispatch } from "react-redux";

// Features
import { setNewSpot } from "../../features/addSpot/addSpotSlice";

function AddSpotFormDatePicker() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const monthsOrder = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };

  const dispatch = useDispatch();

  const addSpot = useSelector((state) => state.addSpot.value);

  useEffect(() => {
    // Set month to the start date ( end date is not used )
    dispatch(
      setNewSpot({ ...addSpot, month: monthsOrder[startDate.getMonth() + 1] })
    );
  }, [startDate]);

  return (
    <div className="date-container">
      <div className={"date--flex"}>
        <h4>Start</h4>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          dateFormat="MMMM"
          showMonthYearPicker
        />
      </div>
      <div className={"date--flex"}>
        <h4>End</h4>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          dateFormat="MMMM"
          showMonthYearPicker
        />
      </div>
    </div>
  );
}

export default AddSpotFormDatePicker;
