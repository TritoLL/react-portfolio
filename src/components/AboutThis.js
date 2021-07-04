import React from "react";
import styled from "styled-components";
import {
    AnchorTitle,
    CenteredDiv,
    CustomParagraph,
} from "../styles/CustomStyles";
import { FaReact, FaNpm } from "react-icons/fa";

const IconBox = styled.div`
    display: flex;
    padding: 20px 0px;
    width: 100%;
    justify-content: center;

    * {
        padding: 0px 15px;
    }
`;

const AboutThis = ({ iconSize = 100 }) => {
    return (
        <section>
            <h1>
                <AnchorTitle href="#portfolio">About This Website</AnchorTitle>
            </h1>
            <CenteredDiv>
                <CustomParagraph size="small">
                    This portfolio was created during the break between my
                    second and third terms of study at Red River College. It is
                    my first attempt at a portfolio as well as my first website
                    built with React.
                </CustomParagraph>
                <CustomParagraph
                    size="small"
                    style={{ fontWeight: "bold", textAlign: "center" }}
                >
                    Technologies used:
                </CustomParagraph>
            </CenteredDiv>

            <IconBox>
                <FaReact size={iconSize} />
                <FaNpm size={iconSize} />
            </IconBox>
        </section>
    );
};

export default AboutThis;
