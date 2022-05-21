import styled from "styled-components";

import AddSpotForm from "./AddSpotForm";

export const StyledAddSpotForm = styled(AddSpotForm)`
  width: 300px;
  height: 500px;
  background-color: var(--clr-white-1);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 900;

  /* Datepicker custom styles */
  .date--flex {
    display: flex;
    flex-direction: column;
    width: 100px;
    margin-left: 35px;
    margin-top: 10px;
  }

  .react-datepicker__input-container input {
    outline: none;
    border: none;
    background-color: var(--clr-white-1);
    user-select: none;
    width: 90px;
    font-size: 18px;
  }

  .react-datepicker__input-container input:hover {
    cursor: pointer;
  }

  .react-datepicker-wrapper,
  .react-datepicker-ignore-onclickoutside {
    width: 60px;
    display: inline-block;
  }

  & .form__title {
    font-size: 24px;
    font-weight: 400;
    margin-left: 35px;
    margin-top: 20px;
  }

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

  & .form__label {
    font-size: 20px;
    font-weight: 500;
    margin-left: 35px;
    margin-top: 20px;
    display: block;
  }

  .button-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 30px;
  }

  .form__information {
    text-align: center;
    margin-inline: auto;
    width: 80%;
    margin-top: 20px;
    font-size: 18px;
  }

  .information__text span {
    color: var(--clr-blue-2);
    font-weight: 700;
  }
`;
