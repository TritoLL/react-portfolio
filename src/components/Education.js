import React from "react";
import { AnchorTitle, CenteredDiv } from "../styles/CustomStyles";
import { EducationEntry } from "./EducationEntry";
import { educationEntries } from "../data/EducationEntries";

const Education = () => {
    return (
        <section>
            <h1>
                <AnchorTitle href="#education">Education</AnchorTitle>
            </h1>
            <CenteredDiv>
                {educationEntries.map((entry, index) => (
                    <EducationEntry key={index} entry={entry} />
                ))}
            </CenteredDiv>
        </section>
    );
};

export default Education;
