import React from "react";
import IconLinks from "./IconLinks";
import ThemeToggler from "./ThemeToggler";
import styled from "styled-components";
import { DivNoMobile, HeaderFooter } from "../styles/CustomStyles";

const CustomHeader = styled(HeaderFooter)`
    border-bottom: 7px solid ${(props) => props.theme.border};
`;

const Header = ({ theme, toggleTheme }) => {
    return (
        <CustomHeader>
            <h1>Alexander Friesen</h1>
            <h2>
                <i>(but "Alex" will do.)</i>
            </h2>
            <DivNoMobile>
                <ThemeToggler theme={theme} toggleTheme={toggleTheme} />
                <IconLinks />
            </DivNoMobile>
        </CustomHeader>
    );
};

export default Header;
