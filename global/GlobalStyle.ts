import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }
    body {
         font-family: "Roboto", sans-serif;
        background: #06185c;
        background: radial-gradient(circle, rgba(6, 24, 92, 1) 0%, rgba(1, 5, 20, 1) 100%);
    }
`;