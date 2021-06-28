import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";

const bigText = "5";
const smallText = "2";
import { AnchorTitle } from "../styles/CustomStyles";

const CodeParagraph = styled.p`
    font-size: ${(props) => props.fontSize * 1.5}vw;
    position: relative;
    width: 80%;
    left: ${(props) => props.left - 15}%;
    :nth-child(odd) {
        color: ${(props) => props.theme.border};
    }

    @media (min-width: 768px) {
        width: ${(props) => props.width}%;
        left: ${(props) => props.left}%;
        font-size: ${(props) => props.fontSize}vw;
    }
`;

const Key = styled.span`
    color: ${(props) => props.theme.border};
    font-size: ${smallText * 1.25}vw;

    @media (min-width: 768px) {
        font-size: ${smallText * 0.75}vw;
    }
`;

const AboutMe = () => {
    const today = dayjs(Date.now());
    const myBirthday = dayjs("1995-09-19");

    const years = today.diff(myBirthday, "year");
    const months = today.diff(myBirthday, "month") - years * 12;

    return (
        <section>
            <CodeParagraph fontSize={bigText} left="25" width="55">
                const{" "}
                <AnchorTitle href="#aboutme" className="fake-link">
                    aboutMe
                </AnchorTitle>{" "}
                = &#123;
            </CodeParagraph>
            <CodeParagraph fontSize={smallText} left="30" width="50">
                <Key>myName:</Key> 'Alex',
                <br />
                <Key>myAge:</Key> '{years} years, {months} months',
                <br />
                <Key>myLocation:</Key> 'Manitoba, Canada',
                <br />
                <Key>myInterests:</Key> ['Game Development', 'Software
                Development', 'Web Development', 'Video Games', 'Cute Dogs'],
                <br />
                <Key>aComment:</Key> '
                <i>
                    Welcome to my portfolio! Here you'll find information about
                    me, this website, my personal projects, and my education.
                </i>
                ',
                <br />
            </CodeParagraph>
            <CodeParagraph fontSize={bigText} left="25" width="10">
                &#125;
            </CodeParagraph>
        </section>
    );
};

export default AboutMe;
