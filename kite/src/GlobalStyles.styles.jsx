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
    --clr-white-1: #fff;
    --clr-white-2: #fafafa;

    --clr-gray-1: #f3f3f3;
    --clr-gray-2: #e4e7e9;
    --clr-gray-3: #d8d8d8;
    --clr-gray-4: #c7c7cc;
    --clr-gray-5: #9B9B9B;
    --clr-gray-6: #787878;

    --clr-black-1: #1a1a1a;
    
    --clr-blue-1: #4a90e2;
    --clr-blue-2: #007aff;

    --clr-red: #ff3b30;
    
    --clr-yellow: #e8b100;

    --font-calli: "Calligraffitti", sans-serif;
  }

  body {
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

`;
