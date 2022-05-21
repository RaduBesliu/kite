import styled from "styled-components";

import SpotInformation from "./SpotInformation";

export const StyledSpotInformation = styled(SpotInformation)`
  margin-bottom: 20px;

  & .type {
    color: var(--clr-gray-6);
    font-size: 16px;
    font-weight: 700;
  }

  & .value {
    color: var(--clr-black-1);
    font-size: 20px;
  }

  @media (max-width: 550px) {
    & .type {
      font-size: 14px;
    }

    & .value {
      font-size: 18px;
    }
  }
`;
