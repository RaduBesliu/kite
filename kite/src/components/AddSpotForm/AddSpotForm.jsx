// React
import React from "react";

// Libraries
import { HiInformationCircle } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";

// Components
import { StyledAddSpotFormInput } from "./AddSpotFormInput/AddSpotFormInput.styles";
import AddSpotFormDatePicker from "../AddSpotFormDatePicker/AddSpotFormDatePicker";
import { StyledButton } from "../Button/Button.styles";

// Features
import { setNewSpot } from "../../features/addSpot/addSpotSlice";

function AddSpotForm({ className }) {
  const dispatch = useDispatch();

  const addSpot = useSelector((state) => state.addSpot.value);

  const handleCancel = (e) => {
    e.preventDefault();
    dispatch(setNewSpot({ ...addSpot, isPopupOpen: false }));
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    if (
      !(
        addSpot.name &&
        addSpot.country &&
        addSpot.name.length <= 25 &&
        addSpot.country.length <= 25
      )
    )
      return;
    dispatch(setNewSpot({ ...addSpot, isPopupOpen: false, isConfirmed: true }));
  };

  return (
    <form className={className}>
      <h2 className="form__title">Add Spot</h2>
      <StyledAddSpotFormInput
        className={"form__input"}
        width="230px"
        height="30px"
        type="name"
        borderBottom="2px solid var(--clr-gray-4)"
        backgroundColor="var(--clr-white-1)"
        labelText="Name"
      />
      <StyledAddSpotFormInput
        className={"form__input"}
        width="230px"
        height="30px"
        type="country"
        borderBottom="2px solid var(--clr-gray-4)"
        backgroundColor="var(--clr-white-1)"
        labelText="Country"
      />
      <label className="form__label">High Season</label>
      <AddSpotFormDatePicker />
      <div className="button-container">
        <StyledButton
          width="max-content"
          height="max-content"
          backgroundColor="white"
          color="var(--clr-red)"
          handleClick={handleCancel}
          buttonLabel={"CANCEL"}
        />
        <StyledButton
          width="max-content"
          height="max-content"
          backgroundColor="white"
          color="var(--clr-blue-2)"
          handleClick={handleConfirm}
          buttonLabel={"CONFIRM"}
        />
      </div>
      <div className="form__information">
        <HiInformationCircle size={30} />
        <p className="information__text">
          To add your new spot, click anywhere on the map after hitting{" "}
          <span>CONFIRM</span>.
        </p>
      </div>
    </form>
  );
}

export default AddSpotForm;
