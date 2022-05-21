// React
import React from "react";

// Libraries
import { HiInformationCircle } from "react-icons/hi";

// Components
import { StyledAddSpotFormInput } from "./AddSpotFormInput/AddSpotFormInput.styles";
import AddSpotFormDatePicker from "../AddSpotFormDatePicker/AddSpotFormDatePicker";
import { StyledButton } from "../Button/Button.styles";

function AddSpotForm({ className }) {
  return (
    <form className={className}>
      <h2 className="form__title">Add Spot</h2>
      <StyledAddSpotFormInput
        className={"form__input"}
        width="230px"
        height="30px"
        name="name"
        borderBottom="2px solid var(--clr-gray-4)"
        backgroundColor="var(--clr-white-1)"
        labelText="Name"
      />
      <StyledAddSpotFormInput
        className={"form__input"}
        width="230px"
        height="30px"
        name="country"
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
          handleClick={(e) => {
            e.preventDefault();
          }}
          buttonLabel={"CANCEL"}
        />
        <StyledButton
          width="max-content"
          height="max-content"
          backgroundColor="white"
          color="var(--clr-blue-2)"
          handleClick={(e) => {
            e.preventDefault();
          }}
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
