import React from "react";
import IconLinks from "./IconLinks";
import ThemeToggler from "./ThemeToggler";
import { DivNoMobile } from "../styles/CustomStyles";

const Header = ({ theme, toggleTheme }) => {
    return (
        <header>
            <h1>Alexander Friesen</h1>
            <h2>
                <i>(but "Alex" will do.)</i>
            </h2>
            <DivNoMobile>
                <IconLinks />
                <ThemeToggler theme={theme} toggleTheme={toggleTheme} />
            </DivNoMobile>
        </header>
    );
};

export default Header;
