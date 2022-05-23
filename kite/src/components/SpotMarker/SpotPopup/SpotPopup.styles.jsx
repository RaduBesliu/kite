import styled from "styled-components";

import SpotPopup from "./SpotPopup";

export const StyledSpotPopup = styled(SpotPopup)`
  .leaflet-popup-content-wrapper {
    border-radius: 0;
    background: transparent;
    padding: 0;
    width: 269px;
  }

  .leaflet-popup-tip-container {
    visibility: hidden;
  }

  .leaflet-popup-close-button {
    margin-top: 16px;
    margin-right: 15px;
  }

  .leaflet-popup-close-button span {
    font-size: 32px;
    font-weight: 300;
    color: var(--clr-gray-5);
  }

  .leaflet-popup-content {
    margin: 0;
  }

  .leaflet-popup-content p {
    margin: 0;
  }

  background-color: var(--clr-white-1);

  & .container {
    width: 269px;
    height: 490px;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.5);
    position: relative;

    & .information {
      width: 200px;
      height: 475px;
      padding-left: 14px;
      padding-top: 14px;

      & h2 {
        font-size: 26px;
        font-weight: 700;
      }

      & h4 {
        font-size: 20px;
        font-weight: 400;
        color: var(--clr-gray-6);
        margin-bottom: 26px;
      }
    }
  }

  @media (max-width: 550px) {
    .leaflet-popup-content-wrapper,
    & .container {
      width: 240px;
    }

    .leaflet-popup-close-button {
      margin-right: 10px;
    }

    svg {
      margin-left: 10px;
    }

    & .container > .information {
      width: 150px;

      & h2 {
        font-size: 24px;
      }

      & h4 {
        font-size: 18px;
      }
    }
  }
`;
