import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
    width: 100%;
    margin: 0 auto;
    background-color: ${(props) => props.theme.main};
    border-top: 10px solid ${(props) => props.theme.accent1};
    border-bottom: 1px solid ${(props) => props.theme.main};
`;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: ${(props) => props.theme.text};
`;

const Footer = () => {
    return (
        <>
            <StyledFooter>
                <Title>Footer Text Goes Here</Title>
            </StyledFooter>
        </>
    );
};

export default Footer;
