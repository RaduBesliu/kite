// Libraries
import styled from "styled-components";

// Components
import Navbar from "./Navbar";

export const StyledNavbar = styled(Navbar)`
  width: 100vw;
  background-color: var(--clr-white);
  height: 68px;
  position: fixed;
  top: 0;
  z-index: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & p {
    font-size: 44px;
    font-family: var(--font-calli);
    margin-left: 36px;
    margin-top: 12px;
    user-select: none;
  }

  & .container--flex {
    display: flex;
    align-items: center;
    gap: 24px;
    margin-right: 18px;
  }

  & .user-icon:hover {
    cursor: pointer;
  }

  & .user {
    position: relative;

    & .user--logout {
      width: 106px;
      height: 48px;
      position: absolute;
      transform: translate(0, 100%);
      user-select: none;
    }
  }

  @media (max-width: 360px) {
    & p {
      display: none;
    }

    & {
      justify-content: center;
    }
  }
`;
