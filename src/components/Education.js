import React from "react";
import styled from "styled-components";
import {
    AnchorTitle,
    CenteredDiv,
    CustomParagraph,
} from "../styles/CustomStyles";

const EducationKey = styled.p`
    display: inline;
`;

const Title = styled(EducationKey)`
    color: ${(props) => props.theme.border};
    font-weight: bold;
`;

const Course = styled(Title)`
    font-weight: normal;
    font-style: italic;
`;

const Date = styled(EducationKey)`
    font-size: ${(props) => props.theme.smallText * 1.25}vw;

    @media (min-width: 768px) {
        font-size: ${(props) => props.theme.smallText * 0.75}vw;
    }
`;

const Description = styled(EducationKey)`
    position: relative;
    left: 5%;
`;

const Education = () => {
    return (
        <section>
            <h1>
                <AnchorTitle href="#education">Education</AnchorTitle>
            </h1>
            <CenteredDiv>
                <CustomParagraph>
                    <Title>
                        <Date>Sep 2020 - Present</Date>
                        <br />
                        Red River College
                        <br />
                        <Course>Business Information Technology</Course>
                    </Title>
                    <br />{" "}
                    <Description>
                        <ul>
                            <li>
                                Learned object oriented programming concepts
                                such as encapsulation, inheritance, and
                                polymorphism.
                            </li>
                            <li>
                                Applied more advanced concepts such as data
                                binding, collections, and generics.
                            </li>
                            <li>Performed unit testing in MSTest framework.</li>
                            <li>
                                Built a CRUD application using Windows Forms.
                            </li>
                            <li>
                                Acquired SQL knowledge including CRUD/ERD
                                basics, table normalization, functions and
                                aggregates.
                            </li>
                            <li>
                                Used various languages such as C#, JavaScript,
                                and SQL.
                            </li>
                            <li>
                                Built and troubleshot (yes, that's really the
                                past tense of troubleshoot) computer networks in
                                Cisco Packet Tracer.
                            </li>
                            <li>
                                Created analysis and design models of various
                                systems using Astah software.
                            </li>
                            <li>
                                Designed, implemented, and deployed a website
                                built from scratch.
                            </li>
                        </ul>
                    </Description>
                </CustomParagraph>
                <CustomParagraph>
                    <Title>
                        <Date>Jan 2020 - May 2020</Date>
                        <br />
                        Red River College
                        <br />
                        <Course>
                            Introduction to Business Information Technology
                            (Honours)
                        </Course>
                    </Title>
                    <br />{" "}
                    <Description>
                        <ul>
                            <li>
                                Acquired proficiency in Microsoft Excel and
                                Microsoft Word.
                            </li>
                            <li>
                                Learned fundamental programming concepts such as
                                boolean expressions, conditional statements, and
                                looping.
                            </li>
                            <li>
                                Learned number systems such as binary, octal and
                                hexadecimal.{" "}
                            </li>
                            <li>
                                Honed soft skills via presentations and group
                                work.
                            </li>
                        </ul>
                    </Description>
                </CustomParagraph>
            </CenteredDiv>
        </section>
    );
};

export default Education;
