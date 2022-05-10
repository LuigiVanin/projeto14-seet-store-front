import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body{
        min-height: 100vh;
        width: 100%;
        background-color: #ffff4b;
        font-family: 'Lexend Deca', sans-serif;
    }
    .root{
        min-height: 100vh;
    }
`;

export default GlobalStyles;
