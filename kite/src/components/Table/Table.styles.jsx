import styled from "styled-components";

// Componets
import Table from "./Table";

export const StyledTable = styled(Table)`
  width: 100%;
  display: block;
  overflow-x: auto;
  /* white-space: nowrap; */
  border-spacing: 0;
  font-size: 20px;
  margin-bottom: 100px;

  & th {
    text-align: left;
    height: 50px;
    border-right: 19px solid transparent;
    padding-left: 5px;
    font-weight: 500;
  }

  & td {
    width: calc(100% / 7);
    height: 50px;
    padding-left: 5px;
    border-right: 19px solid transparent;
  }

  & .flex--container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 175px;
  }

  & thead tr {
    background-color: var(--clr-dark-gray);
  }

  & tbody tr:nth-child(2n) {
    background-color: var(--clr-light-gray);
  }

  @media (max-width: 1500px) {
    font-size: 18px;
  }

  @media (max-width: 550px) {
    font-size: 16px;
  }
`;
