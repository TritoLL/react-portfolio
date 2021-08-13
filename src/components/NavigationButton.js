import { useEffect, useState } from "react";
import { RiMenuUnfoldFill, RiMenuFoldFill } from "react-icons/ri";

const NavigationButton = ({ iconSize = 50 }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const Icon = menuOpen ? RiMenuFoldFill : RiMenuUnfoldFill;

    useEffect(() => {
        const nav = document.querySelector("#main-navigation");
        if (nav !== null) {
            nav.style.top = menuOpen ? "0px" : "-200px";
            nav.style.height = menuOpen ? "50px" : "0px";
        }
    }, [menuOpen]);

    return (
        <Icon
            size={iconSize}
            onClick={() => {
                setMenuOpen(!menuOpen);
            }}
        />
    );
};

export default NavigationButton;
