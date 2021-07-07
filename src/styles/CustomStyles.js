import styled from "styled-components";

export const AnchorTitle = styled.a`
    font-size: ${(props) => props.theme.bigText * 1.5}vw;
    text-shadow: 6px 6px 3px #212121;
    font-weight: bold;
    text-decoration: none;
    pointer-events: none;
    color: ${(props) => props.theme.border};

    @media (min-width: 768px) {
        font-size: ${(props) => props.theme.bigText}vw;
    }
`;

export const CenteredDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`;

export const CustomDiv = styled.div`
    font-size: ${(props) =>
        props.size === "big"
            ? (props) => props.theme.bigText * 1.5
            : (props) => props.theme.smallText * 1.5}vw;
    left: ${(props) => props.left}%;
    position: relative;
    width: 80%;
    padding: 10px;

    @media (min-width: 768px) {
        width: ${(props) => props.width}%;
        font-size: ${(props) =>
            props.size === "big"
                ? (props) => props.theme.bigText
                : (props) => props.theme.smallText}vw;
    }
`;

export const DivNoMobile = styled.div`
    @media (max-width: 768px) {
        display: none;
    }
`;

export const HeaderFooter = styled.header`
    background-color: ${(props) => props.theme.main};
    padding: 10px 0px;
    width: 100%;
    margin: 0 auto;
`;

export const MobileIconsContainer = styled.div`
    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
            padding: 0px 10px;
        }
    }
`;
