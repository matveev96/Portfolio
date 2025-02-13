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
        min-width: 360px;

}

a {
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
}

ul {
    list-style: none;
}

button {
    background-color: unset;
    border: none;
    -webkit-tap-highlight-color: transparent;
}

section {
    padding-top: 140px;
    margin-bottom: 60px;

    @media ${theme.media.proTablet} {
        margin-bottom: 0;
    }

    @media ${theme.media.miniTablet} {
        padding-top: 110px;
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
