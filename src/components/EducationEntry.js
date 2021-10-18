import React from "react";
import styled from "styled-components";
import { CustomDiv } from "../styles/CustomStyles";

const Title = styled.span`
    color: ${(props) => props.theme.border};
    font-weight: bold;
`;

const Course = styled(Title)`
    font-weight: normal;
    font-style: italic;
`;

const Date = styled.span`
    font-size: ${(props) => props.theme.smallText * 1.25}vw;

    @media (min-width: 768px) {
        font-size: ${(props) => props.theme.smallText * 0.75}vw;
    }
`;

const Description = styled.span`
    position: relative;
    left: 5%;
`;

const EducationEntry = ({ entry }) => (
    <CustomDiv>
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
                {entry.bulletPoints.map((bulletPoint, indexTitle) => (
                    <>
                        <li key={indexTitle}>{bulletPoint.title}</li>
                        <ul>
                            {bulletPoint.content.map(
                                (content, indexContent) => (
                                    <li key={indexContent}>{content}</li>
                                )
                            )}
                        </ul>
                    </>
                ))}
            </ul>
        </Description>
    </CustomDiv>
);

export default EducationEntry;
