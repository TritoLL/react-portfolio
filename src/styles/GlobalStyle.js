import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: 0;
        font-family: 'Roboto Mono', monospace;
        color: ${(props) => props.theme.text};
    }

    .transition * {
        transition-property: background-color, color;
        transition-duration: 0.15s;
    }

    html {
        scroll-behavior: smooth;
    }

    a:hover,
    a:active,
    svg:hover > path,
    svg:active > path {
        color: ${(props) => props.theme.border};
    }

    svg:active > path {
        color: ${(props) => props.theme.main};
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

    header h1 {
        font-size: 8vw;
    }

    header h2 {
        display: none;
    }

    section {
        padding: 15px 0px;
    }

    section:nth-child(odd) {
        background-color: ${(props) => props.theme.main}AA;
    }

    .fake-link {
        text-decoration: none;
        pointer-events: none;
    }

    .icon-links, .theme-toggler {
        display: flex;
        justify-content: center;
    }
    
    @media (min-width: 768px) {
        header .icon-links {
            position: absolute;
            top: 35px;
            right: 1%;
        }
        header .theme-toggler {
            position: absolute;
            top: 35px;
            left: 1%;
        }
        header h1 {
            font-size: 3em;
        }
        header h2 {
            display: block;
        }
    }
`;
