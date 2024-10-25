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

        padding-top: 140px;

        @media ${theme.media.proTablet} {
            padding-top: 260px;
        }

        @media ${theme.media.miniTablet} {
            padding-top: 100px;
        }
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

    @media ${theme.media.proTablet} {
        margin-bottom: 70px;
    }
    @media ${theme.media.mobile} {
        margin-bottom: 50px;
    }
}


@media (performance-reduced-motion: reduce) {
    *,
    *::after,
    *::before {
        animation: none !important;
    } 
}


`
