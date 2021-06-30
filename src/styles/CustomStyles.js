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

export const CustomParagraph = styled.p`
    font-size: ${(props) =>
        props.size === "big"
            ? (props) => props.theme.bigText * 1.5
            : (props) => props.theme.smallText * 1.5}vw;
    position: relative;
    width: 80%;
    left: ${(props) => props.left - 15}%;
    :nth-child(odd) {
        color: ${(props) => props.theme.border};
    }
    padding: 10px 0px;

    @media (min-width: 768px) {
        width: ${(props) => props.width}%;
        left: ${(props) => props.left}%;
        font-size: ${(props) =>
            props.size === "big"
                ? (props) => props.theme.bigText
                : (props) => props.theme.smallText}vw;
    }
`;
