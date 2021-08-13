import { useEffect, useState } from "react";
import { ImMenu3, ImMenu4 } from "react-icons/im";

const NavigationButton = ({ iconSize = 50 }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const Icon = menuOpen ? ImMenu4 : ImMenu3;

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
