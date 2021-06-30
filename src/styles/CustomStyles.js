import styled from "styled-components";

export const AnchorTitle = styled.a`
    font-size: ${(props) => props.theme.bigText * 1.5}vw;
    text-shadow: 2px 5px 2px #000000;
    font-weight: bold;
    text-decoration: none;
    pointer-events: none;

    @media (min-width: 768px) {
        font-size: ${(props) => props.theme.bigText}vw;
    }
`;

export const DivNoMobile = styled.div`
    @media (max-width: 768px) {
        display: none;
    }
`;
