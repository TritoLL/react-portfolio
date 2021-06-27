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

    .icon-links {
        display: flex;
        justify-content: center;
        padding: 5px 0px;
    }

    footer {
        border-top: 7px solid ${(props) => props.theme.border};
    }

    h1, h2 {
        text-align: center;
    }

    h1 {
        font-size: 8vw;
    }

    h2 {
        display: none;
    }

    @media (min-width: 768px) {
        header .icon-links {
            position: absolute;
            top: 7%;
            right: 1%;
            padding: 0px;
        }
        h1 {
            font-size: 3em;
        }
        h2 {
            display: block;
        }
    }
`;
