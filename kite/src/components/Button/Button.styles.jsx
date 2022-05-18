import styled from "styled-components";

import Button from "./Button";

export const StyledButton = styled(Button)`
  font-size: ${(props) => props.fontSize || "16px"};
  font-weight: ${(props) => props.fontWeight || 700};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
  z-index: ${(props) => props.zIndex || 0};
  position: ${(props) => props.position || "static"};
  color: ${(props) => props.color || "white"};
  margin: ${(props) => props.margin || 0};
  top: ${(props) => props.top || 0};
  right: ${(props) => props.right || 0};
  filter: ${(props) => props.filter || "none"};
  border-radius: ${(props) => props.borderRadius || 0};
  box-shadow: ${(props) => props.boxShadow || "none"};

  border: none;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`;
