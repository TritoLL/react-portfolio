import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: 0;
        font-family: 'Roboto Mono', monospace;
        color: ${(props) => props.theme.text};
    }    

    body {
        background-color: ${(props) => props.theme.body};
    }

    header, footer {
        background-color: ${(props) => props.theme.main};
        padding: 10px;
        width: 100%;
        margin: 0 auto;
    }

    header {
        border-bottom: 7px solid ${(props) => props.theme.border};
    }

    footer {
        border-top: 7px solid ${(props) => props.theme.border};
        display: flex;
        justify-content: center;
    }

    footer * {
        padding: 0px 5px;
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
