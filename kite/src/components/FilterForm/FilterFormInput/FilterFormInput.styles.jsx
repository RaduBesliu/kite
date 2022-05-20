import styled from "styled-components";

// Components
import FilterFormInput from "./FilterFormInput";

export const StyledFilterFormInput = styled(FilterFormInput)`
  margin-inline: auto;
  width: max-content;

  & input {
    border: none;
    outline: none;
    font-size: 16px;

    width: ${(props) => props.width || "150px"};
    height: ${(props) => props.height || "50px"};
    border-bottom: ${(props) => props.borderBottom};
    background-color: ${(props) => props.backgroundColor};

    transition: 500ms;
  }

  & input:focus {
    border-color: var(--clr-button-secondary);
  }

  & label {
    font-size: 14px;
    display: block;
  }
`;
