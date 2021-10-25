import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    background: ${({theme}) => theme.color.bg};
    color: ${({theme}) => theme.color.white};
    width: 100vw;
    overflow-x: hidden;
  }
`;