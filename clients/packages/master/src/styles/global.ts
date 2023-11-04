import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0; 
  }

  * {
    font-size: 16px; 
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
    font-family: "Noto Sans", sans-serif; 
  }

  [disabled] {
    cursor: not-allowed;
    opacity: 0.6; 
  }
`;
