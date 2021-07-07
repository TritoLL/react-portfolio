import React from "react";
import IconLinks from "./IconLinks";
import styled from "styled-components";
import { HeaderFooter, MobileIconsContainer } from "../styles/CustomStyles";

const CustomFooter = styled(HeaderFooter)`
    border-top: 7px solid ${(props) => props.theme.border};
`;

const Footer = () => {
    return (
        <CustomFooter as="footer">
            <MobileIconsContainer>
                <IconLinks />
            </MobileIconsContainer>
        </CustomFooter>
    );
};

export default Footer;
