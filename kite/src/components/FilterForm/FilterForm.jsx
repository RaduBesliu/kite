// React
import React from "react";
import { useState } from "react";

// Libraries
import { useDispatch } from "react-redux";

// Components
import { StyledButton } from "../Button/Button.styles";
import { StyledFilterFormInput } from "./FilterFormInput/FilterFormInput.styles";

// Features
import { setFilter } from "../../features/filter/filterSlice";

function FilterForm({ className, setShowFilterForm }) {
  const [formData, setFormData] = useState({
    country: "",
    windProbability: "",
  });

  const dispatch = useDispatch();

  const submitFilterForm = (e) => {
    e.preventDefault();

    dispatch(setFilter(formData));
    setShowFilterForm(false);
  };

  return (
    <form className={className}>
      <StyledFilterFormInput
        className={"form__input"}
        width="217px"
        height="30px"
        name="country"
        borderBottom="2.38px solid var(--clr-gray-4)"
        backgroundColor="var(--clr-white-2)"
        labelText="Country"
        formData={formData}
        setFormData={setFormData}
      />{" "}
      <StyledFilterFormInput
        className={"form__input"}
        width="217px"
        height="30px"
        name="windProbability"
        borderBottom="2.38px solid var(--clr-gray-4)"
        backgroundColor="var(--clr-white-2)"
        labelText="Wind Probability"
        formData={formData}
        setFormData={setFormData}
      />
      <StyledButton
        className={"form__submit"}
        width="150px"
        height="44px"
        buttonLabel={"APPLY FILTER"}
        color="var(--clr-black-1)"
        filter="drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.5))"
        handleClick={submitFilterForm}
      />
    </form>
  );
}

export default FilterForm;
