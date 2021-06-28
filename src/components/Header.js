import React from "react";
import IconLinks from "./IconLinks";
import ThemeToggler from "./ThemeToggler";

const Header = ({ toggleTheme }) => {
    return (
        <header>
            <a href="#top" className="fake-link">
                <h1>Alexander Friesen</h1>
            </a>
            <h2>
                <i>(but "Alex" will do.)</i>
            </h2>
            <IconLinks />
            <ThemeToggler toggleTheme={toggleTheme} />
        </header>
    );
};

export default Header;
