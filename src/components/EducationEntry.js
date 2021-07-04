import React from "react";
import styled from "styled-components";
import { CustomParagraph } from "../styles/CustomStyles";

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

export const EducationEntry = ({ entry }) => (
    <CustomParagraph>
        <Title>
            <Date>
                {entry.startDate} - {entry.endDate}
            </Date>
            <br />
            {entry.institutionName}
            <br />
            <Course>{entry.courseName}</Course>
        </Title>
        <br />{" "}
        <Description>
            <ul>
                {entry.bulletPoints.map((bulletPoint) => (
                    <li>{bulletPoint}</li>
                ))}
            </ul>
        </Description>
    </CustomParagraph>
);
