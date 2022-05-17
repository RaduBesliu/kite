import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }

  :root {
    --clr-white: white;
    --clr-background: #f2f2f2;
    --clr-light-gray: #f3f3f3;
    --clr-mid-gray: #e4e7e9;
    --clr-dark-gray: #979797;
    --clr-font-primary: #1a1a1a;
    --clr-font-secondary: #787878;
    --clr-button-primary: #4a90e2;
    --clr-button-secondary: #007aff;
    --clr-red: #ff3b30;
    --clr-orange: #e8b100;

    --font-calli: "Calligraffitti", sans-serif;
  }

`;
