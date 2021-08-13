import { RiMenuUnfoldFill, RiMenuFoldFill } from "react-icons/ri";

const NavigationButton = ({ iconSize = 50 }) => {
    return (
        <RiMenuUnfoldFill
            size={iconSize}
            onClick={() => {
                console.log("Menu Button Clicked.");
            }}
        />
    );
};

export default NavigationButton;
