import React from "react";
import styled from "styled-components";
import { AnchorTitle } from "../styles/CustomStyles";

const SlideshowContainer = styled.div`
    overflow: hidden;
    margin: 20px auto 0px auto;
    width: 85%;
    position: relative;

    @media (min-width: 768px) {
        width: 85%
        max-width: 85%;
    }
`;

const Slide = styled.div`
    // display: none;
    border: 10px solid ${(props) => props.theme.border};

    @media (min-width: 768px) {
        display: flex;
    }
`;

const SlideDescription = styled.p`
    padding: 10px;
    word-wrap: break-word;
    overflow: auto;
    font-size: ${(props) => props.theme.smallText * 1.5}vw;

    @media (min-width: 768px) {
        font-size: ${(props) => props.theme.smallText * 0.8}vw;
        width: 30%;
    }
`;

const SlideImage = styled.img`
    width: 100%;
    border-bottom: 10px solid ${(props) => props.theme.border};

    @media (min-width: 768px) {
        border-bottom: none;
        border-right: 10px solid ${(props) => props.theme.border};
        width: 70%;
    }
`;

const Projects = () => {
    return (
        <section>
            <h1>
                <AnchorTitle href="#projects">Projects</AnchorTitle>
            </h1>
            <SlideshowContainer>
                <Slide>
                    <SlideImage src="../images/testimage.png" alt="test" />
                    <SlideDescription>
                        This is a slide description. Here is where the
                        description of a slide will go. If you're describing the
                        slide, it will appear here. Descriptions of the current
                        slide will show up here. Describe the slide here.
                        Description.
                    </SlideDescription>
                </Slide>
            </SlideshowContainer>
        </section>
    );
};

export default Projects;
