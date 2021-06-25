import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
    width: 100%;
    margin: 0 auto;
    background-color: ${(props) => props.theme.body};
    border-top: 1px solid ${(props) => props.theme.body};
    border-bottom: 10px solid ${(props) => props.theme.border};
`;

const Title = styled.h1`
    font-size: 3em;
    text-align: center;
    color: ${(props) => props.theme.text};
`;

const Header = () => {
    return (
        <>
            <StyledHeader>
                <Title>Header Text Goes Here</Title>
            </StyledHeader>
        </>
    );
};

export default Header;
