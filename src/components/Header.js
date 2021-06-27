import React from "react";
import IconLinks from "./IconLinks";
import styled from "styled-components";

const TopRightDiv = styled.div`
    position: absolute;
    top: 7%;
    right: 1%;
`;

const Header = () => {
    return (
        <header>
            <h1>Alexander Friesen</h1>
            <h2>
                <i>(but "Alex" will do.)</i>
            </h2>
            <TopRightDiv>
                <IconLinks />
            </TopRightDiv>
        </header>
    );
};

export default Header;
