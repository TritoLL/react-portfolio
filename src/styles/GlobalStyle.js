import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.body}
    }

    header, footer {
        color: ${(props) => props.theme.text};
        background-color: ${(props) => props.theme.main};
        padding: 10px;
        width: 100%;
        margin: 0 auto;
    }

    header {
        border-bottom: 7px solid ${(props) => props.theme.border}
    }

    footer {
        border-top: 7px solid ${(props) => props.theme.border}
    }

    h1, h2 {
        text-align: center;
    }

    h1 {
        font-size: 3em;
    }

    h2 {
        font-size: 1.5em;
    }
`;
