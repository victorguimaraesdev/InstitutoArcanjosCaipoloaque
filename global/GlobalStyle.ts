import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }
    :root {
        --primary: #040d58;
        --secondary: #000000ff;
        --tertiary: #fdff98;
    }
    //#f4f800;
    body {
         font-family: "Roboto", sans-serif;
         background-color: white;
    }
`;