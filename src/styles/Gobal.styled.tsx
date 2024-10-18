import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 10px;
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        line-height: 1.2;
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.font.darkContent};
        background-color: ${theme.colors.pageBg.lightMode};
}

a {
    text-decoration: none;
}

ul {
    list-style: none;
}

button {
    background-color: unset;
    border: none;
}

section {
    margin-bottom: 200px;
}

@media (performance-reduced-motion: reduce) {
    *,
    *::after,
    *::before {
        animation: none !important;
    } 
}


`
