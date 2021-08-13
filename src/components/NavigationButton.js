import { useEffect, useState } from "react";
import { ImMenu3, ImMenu4 } from "react-icons/im";

// collapse and expand code is thanks to: https://css-tricks.com/using-css-transitions-auto-dimensions/

const collapseElement = (element) => {
    // get the height of the element's inner content, regardless of its actual size
    var sectionHeight = element.scrollHeight;

    // temporarily disable all css transitions
    var elementTransition = element.style.transition;
    element.style.transition = "";

    // on the next frame (as soon as the previous style change has taken effect),
    // explicitly set the element's height to its current pixel height, so we
    // aren't transitioning out of 'auto'
    requestAnimationFrame(function () {
        element.style.height = sectionHeight + "px";
        element.style.transition = elementTransition;

        // on the next frame (as soon as the previous style change has taken effect),
        // have the element transition to height: 0
        requestAnimationFrame(function () {
            element.style.height = 0 + "px";
        });
    });
};

const expandElement = (element) => {
    // get the height of the element's inner content, regardless of its actual size
    var sectionHeight = element.scrollHeight;

    // have the element transition to the height of its inner content
    element.style.height = sectionHeight + "px";

    // when the next css transition finishes (which should be the one we just triggered)
    element.addEventListener("transitionend", function endTransition(e) {
        // remove this event listener so it only gets triggered once
        element.removeEventListener("transitionend", endTransition);

        // remove "height" from the element's inline styles, so it can return to its initial value
        element.style.height = null;
    });
};

const NavigationButton = ({ iconSize = 50 }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const Icon = menuOpen ? ImMenu4 : ImMenu3;

    useEffect(() => {
        const nav = document.querySelector("#main-navigation");

        if (nav !== null) {
            if (menuOpen) {
                expandElement(nav);
            } else {
                collapseElement(nav);
            }

            nav.style.top = menuOpen ? "0px" : "-100px";
            nav.style.margin = menuOpen ? "0 0 10px 0" : "0px";
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