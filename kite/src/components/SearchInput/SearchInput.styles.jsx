import styled from "styled-components";

import SearchInput from "./SearchInput";

export const StyledSearchInput = styled(SearchInput)`
  position: relative;
  margin-bottom: 30px;

  & .search-icon {
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translate(0, -50%);
  }

  & input {
    width: ${(props) => props.width || "150px"};
    height: ${(props) => props.height || "50px"};
    background-color: ${(props) => props.backgroundColor};

    border: none;
    outline: none;
    padding-left: 50px;
    font-size: 24px;

    ::placeholder {
      color: ${(props) => props.searchInputLabelColor};
      opacity: 1;
    }

    :-ms-input-placeholder {
      color: ${(props) => props.searchInputLabelColor};
    }

    ::-ms-input-placeholder {
      color: ${(props) => props.searchInputLabelColor};
    }
  }

  @media (max-width: 550px) {
    & input {
      width: 90%;
    }
  }
`;
