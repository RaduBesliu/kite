import styled from "styled-components";

import SpotPopup from "./SpotPopup";

export const StyledSpotPopup = styled(SpotPopup)`
  .leaflet-popup-content-wrapper {
    border-radius: 0;
    background: transparent;
    padding: 0;
  }

  .leaflet-popup-tip-container {
    visibility: hidden;
  }

  .leaflet-popup-close-button {
    display: none;
  }

  background-color: red;
  & div {
    width: 250px;
    height: 398px;
  }
`;
