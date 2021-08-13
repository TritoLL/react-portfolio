import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
    display: block;
    position: relative;
    transition: 0.5s;
    top: -100px;
`;

const NavList = styled.ul`
    display: flex;
    margin: 0 auto;
    width: 90%;
    justify-content: center;
    align-items: center;
`;

const NavListItem = styled.ul`
    text-decoration: none;
    font-weight: bold;
    font-size: 1.8em;
    padding: 0px 15px;
    text-shadow: 2px 2px 2px ${(props) => props.theme.body};

    :not(:first-of-type)::before {
        content: "";
        padding: 0px 15px;
        border-left: 2px solid ${(props) => props.theme.border};
    }

    @media (min-width: 768px) {
        font-size: 1.7em;
    }
`;

const NavigationMenu = () => {
    return (
        <Nav id="main-navigation">
            <NavList>
                <NavListItem>
                    <Link to="">Home</Link>
                </NavListItem>
                <NavListItem>
                    <Link to="tic-tac-dog">Tic-Tac-Dog</Link>
                </NavListItem>
            </NavList>
        </Nav>
    );
};

export default NavigationMenu;
