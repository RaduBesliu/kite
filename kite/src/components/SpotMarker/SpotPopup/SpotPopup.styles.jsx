import styled from "styled-components";

import SpotPopup from "./SpotPopup";

export const StyledSpotPopup = styled(SpotPopup)`
  .leaflet-popup-content-wrapper {
    border-radius: 0;
  }

  .leaflet-popup-tip-container {
    visibility: hidden;
  }
`;
