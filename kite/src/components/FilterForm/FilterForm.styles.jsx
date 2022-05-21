import styled from "styled-components";

// Components
import FilterForm from "./FilterForm";

export const StyledFilterForm = styled(FilterForm)`
  box-shadow: ${(props) => props.boxShadow};
  border-radius: ${(props) => props.borderRadius};

  width: 242px;
  height: 248px;
  background-color: var(--clr-white-2);
  position: absolute;
  top: 117px;
  right: 19px;
  z-index: 900;

  & .form__input {
    margin-top: 22px;
  }

  & .form__input:first-child {
    margin-top: 28px;
  }

  & .form__submit {
    margin-inline: auto;
    margin-top: 30px;
  }
`;
