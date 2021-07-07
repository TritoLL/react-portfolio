import React from "react";
import IconLinks from "./IconLinks";
import styled from "styled-components";
import { HeaderFooter } from "../styles/CustomStyles";

const CustomFooter = styled(HeaderFooter)`
    border-top: 7px solid ${(props) => props.theme.border};
`;

const Footer = () => {
    return (
        <CustomFooter as="footer">
            <IconLinks />
        </CustomFooter>
    );
};

export default Footer;
