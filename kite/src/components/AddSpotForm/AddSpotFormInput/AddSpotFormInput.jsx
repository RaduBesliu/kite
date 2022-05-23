// React
import React from "react";

// Libraries
import { useSelector, useDispatch } from "react-redux";

// Features
import { setNewSpot } from "../../../features/addSpot/addSpotSlice";

function AddSpotFormInput({ className, labelText, type }) {
  const dispatch = useDispatch();

  const addSpot = useSelector((state) => state.addSpot.value);

  return (
    <div className={className}>
      <label>{labelText}</label>
      <input
        value={addSpot.type}
        onChange={(e) =>
          dispatch(setNewSpot({ ...addSpot, [type]: e.target.value }))
        }
        placeholder={`${type} (25 characters max)`}
      />
    </div>
  );
}

export default AddSpotFormInput;
