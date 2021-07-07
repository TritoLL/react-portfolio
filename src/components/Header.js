import React from "react";
import IconLinks from "./IconLinks";
import ThemeToggler from "./ThemeToggler";
import FlavorTextRotator from "./FlavorTextRotator";
import styled from "styled-components";
import { HeaderFooter, MobileIconsContainer } from "../styles/CustomStyles";

const CustomHeader = styled(HeaderFooter)`
    border-bottom: 7px solid ${(props) => props.theme.border};
`;

const Header = ({ theme, toggleTheme }) => {
    return (
        <CustomHeader>
            <h1>Alex Friesen</h1>
            <h2>
                <FlavorTextRotator />
            </h2>
            <MobileIconsContainer>
                <ThemeToggler theme={theme} toggleTheme={toggleTheme} />
                <IconLinks />
            </MobileIconsContainer>
        </CustomHeader>
    );
};

export default Header;
