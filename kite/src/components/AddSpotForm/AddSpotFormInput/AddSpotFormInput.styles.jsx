import styled from "styled-components";

// Components
import AddSpotFormInput from "./AddSpotFormInput";

export const StyledAddSpotFormInput = styled(AddSpotFormInput)`
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

  & input::placeholder {
    text-transform: capitalize;
  }

  & input:focus {
    border-color: var(--clr-blue-2);
  }

  & label {
    font-size: 20px;
    font-weight: 500;
    display: block;
  }
`;
