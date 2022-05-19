import React from "react";

// Components
import { StyledButton } from "../Button/Button.styles";
import { StyledFilterFormInput } from "./FilterFormInput/FilterFormInput.styles";

function FilterForm({ className }) {
  return (
    <form className={className}>
      <StyledFilterFormInput
        width="217px"
        border="2.38px solid var(--clr-input-border)"
      />
      <StyledButton
        width="150px"
        height="44px"
        buttonLabel={"APPLY FILTER"}
        color="var(--clr-font-primary)"
        filter="drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.5))"
      />
    </form>
  );
}

export default FilterForm;
