import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
    //margin: 20px 0 0 0;
    //padding: 20px 0px;
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
    font-size: 4vw;
    padding: 0px 15px;

    :not(:first-of-type)::before {
        content: "";
        padding: 0px 15px;
        border-left: 2px solid ${(props) => props.theme.border};
    }

    @media (min-width: 768px) {
        font-size: 1.5vw;
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
