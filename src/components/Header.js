import React from "react";
import styled from "styled-components";
import IconLinks from "./IconLinks";
import FlavorTextRotator from "./FlavorTextRotator";
import { Link } from "react-router-dom";
import { HeaderFooter, MobileIconsContainer } from "../styles/CustomStyles";
import HeaderControls from "./HeaderControls";
import NavigationMenu from "./NavigationMenu";

const CustomHeader = styled(HeaderFooter)`
    border-bottom: 7px solid ${(props) => props.theme.border};

    a {
        text-decoration: none;
    }
`;

const Header = ({ theme, toggleTheme }) => {
    return (
        <CustomHeader>
            <h1>
                <Link to="/">Alex Friesen</Link>
            </h1>

            <h2>
                <FlavorTextRotator />
            </h2>
            <MobileIconsContainer>
                <HeaderControls theme={theme} toggleTheme={toggleTheme} />
                <IconLinks />
            </MobileIconsContainer>
            <NavigationMenu />
        </CustomHeader>
    );
};

export default Header;
