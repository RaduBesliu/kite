// React
import React from "react";
import { useState } from "react";

// Libraries
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddSpotFormDatePicker() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <div className={"date--flex"}>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        dateFormat="MMMM"
        showMonthYearPicker
      />
      <span>-</span>
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
  );
}

export default AddSpotFormDatePicker;
