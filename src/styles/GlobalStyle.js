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
        padding: 10px 0px;
        width: 100%;
        margin: 0 auto;
    }

    header {
        border-bottom: 7px solid ${(props) => props.theme.border};
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

    section:nth-child(odd) {
        background-color: ${(props) => props.theme.main}AA;
    }

    .fake-link {
        text-decoration: none;
        pointer-events: none;
    }

    .icon-links {
        display: flex;
        justify-content: center;
    }
    
    @media (min-width: 768px) {
        header .icon-links {
            position: absolute;
            top: 35px;
            right: 1%;
        }
        h1 {
            font-size: 3em;
        }
        h2 {
            display: block;
        }
    }
`;
