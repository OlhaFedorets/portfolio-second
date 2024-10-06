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

body {
    margin: 0;
    font-family: 'Poppins', 'Playfair Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    min-width: 375px;
}

a {
    text-decoration: none;
    cursor: pointer;
}

ul {
    list-style: none;
}

button {
    background-color:unset;
    border: none;
}

section {
    padding: 100px 0;

    @media ${theme.media.mobile} {
        padding: 60px 0;
    }
}

section:nth-of-type(3n+1) {
    background-color: ${theme.colors.white};
}

section:nth-of-type(3n+2) {
    background-color: ${theme.colors.secondaryBg};
}

section:nth-of-type(3) {
    background-image: ${theme.colors.gradientBG};
}
`