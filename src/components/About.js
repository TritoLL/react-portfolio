import React from "react";
import styled from "styled-components";

const bigText = "5";
const smallText = "2";

const CodeParagraph = styled.p`
    font-size: ${(props) => props.fontSize * 1.5}vw;
    position: relative;
    width: 80%;
    left: ${(props) => props.left - 15}%;
    :nth-child(even) {
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

const Title = styled.a`
    text-shadow: 2px 5px 2px #000000;
    font-weight: bold;
    text-decoration: none;
    pointer-events: none;
`;

const About = () => {
    return (
        <>
            <CodeParagraph fontSize={bigText} left="25" width="55">
                const <Title href="#about">aboutMe</Title> = &#123;
            </CodeParagraph>
            <CodeParagraph fontSize={smallText} left="30" width="50">
                <Key>myName:</Key> 'Alex',
                <br />
                <Key>myAge:</Key> 'xx years, xx months, xx days',
                <br />
                <Key>myLocation:</Key> 'Manitoba, Canada',
                <br />
                <Key>myInterests:</Key> ['Game Development', 'Software
                Development', 'Web Development', 'Video Games', 'Cute Dogs'],
                <br />
                <Key>aComment:</Key> 'Welcome to my portfolio! Here you'll find
                information about me, this website, my personal projects, and my
                education.',
                <br />
            </CodeParagraph>
            <CodeParagraph fontSize={bigText} left="25" width="10">
                &#125;
            </CodeParagraph>
        </>
    );
};

export default About;
