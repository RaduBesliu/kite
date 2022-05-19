import styled from "styled-components";

// Components
import FilterFormInput from "./FilterFormInput";

export const StyledFilterFormInput = styled(FilterFormInput)`
  & input {
    width: ${(props) => props.width || "150px"};
    height: ${(props) => props.height || "50px"};
    border: ${(props) => props.border};
  }
`;
